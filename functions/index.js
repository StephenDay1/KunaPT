const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const fs = require("node:fs");
const path = require("node:path");
const { englishServiceTitle } = require("./serviceReasonTitles");

admin.initializeApp();

const db = admin.firestore();

function setCorsHeaders(response) {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Content-Type");
}

function normalize(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function loadAppointmentTemplate() {
  const candidates = [
    path.join(__dirname, "email", "appointmentRequest.html"),
    path.join(__dirname, "..", "email", "appointmentRequest.html"),
  ];

  for (const templatePath of candidates) {
    if (fs.existsSync(templatePath)) {
      return fs.readFileSync(templatePath, "utf8");
    }
  }

  logger.warn("Appointment request email template not found.");
  return "";
}

const appointmentTemplateHtml = loadAppointmentTemplate();

function renderAppointmentTemplate(payload) {
  if (!appointmentTemplateHtml) {
    return "";
  }

  const replacements = {
    fullName: escapeHtml(payload.fullName),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    reasonForVisit: escapeHtml(payload.reasonForVisit),
    message: escapeHtml(payload.message || "(No message provided)"),
  };

  return appointmentTemplateHtml.replace(
    /\$\{(fullName|email|phone|reasonForVisit|message)\}/g,
    (_, key) => replacements[key],
  );
}

exports.bookAppointment = onRequest(
  {
    region: "us-central1",
    secrets: ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "RESEND_TO_EMAIL"],
  },
  async (request, response) => {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    const fullName = normalize(request.body?.fullName);
    const email = normalize(request.body?.email).toLowerCase();
    const phone = normalize(request.body?.phone);
    const reasonForVisit = normalize(request.body?.reasonForVisit);
    const reasonForVisitLabel = englishServiceTitle(reasonForVisit);
    const message = normalize(request.body?.message);
    const website = normalize(request.body?.website);

    // Honeypot for basic bot filtering.
    if (website) {
      response.status(200).json({ ok: true });
      return;
    }

    if (!fullName || !email || !phone || !reasonForVisit) {
      response.status(400).json({ error: "Please complete all required fields." });
      return;
    }

    if (!isValidEmail(email)) {
      response.status(400).json({ error: "Please use a valid email address." });
      return;
    }

    if (fullName.length > 120 || email.length > 200 || phone.length > 40 || reasonForVisit.length > 120 || message.length > 3000) {
      response.status(400).json({ error: "One or more fields are too long." });
      return;
    }

    await db.collection("appointmentRequests").add({
      fullName,
      email,
      phone,
      reasonForVisit,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "website",
      status: "new",
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const resendToEmail = process.env.RESEND_TO_EMAIL;

    if (resendApiKey && resendFromEmail && resendToEmail) {
      const appointmentRequestHtml = renderAppointmentTemplate({
        fullName,
        email,
        phone,
        reasonForVisit: reasonForVisitLabel,
        message,
      });

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [resendToEmail],
          subject: `New appointment request from ${fullName}`,
          text: [
            "New appointment request",
            `Name: ${fullName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Reason: ${reasonForVisitLabel}`,
            `Message: ${message || "(none)"}`,
          ].join("\n"),
          html: appointmentRequestHtml || undefined,
        }),
      });

      if (!emailResponse.ok) {
        const details = await emailResponse.text();
        logger.error("Resend email failed", { status: emailResponse.status, details });
      }
    } else {
      logger.warn("Resend env vars are not fully configured. Skipping email send.");
    }

    response.status(200).json({ ok: true });
  } catch (error) {
    logger.error("bookAppointment failed", error);
    response.status(500).json({ error: "Unable to submit request right now. Please try again." });
  }
  },
);
