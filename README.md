# KunaPT
Website for Kuna Physical Therapy

## Appointment booking setup (Firebase + Resend)

1. Install dependencies:
   - `npm install`
   - `cd functions && npm install`
2. Enable Firestore in Firebase Console for your project.
3. Set function secrets:
   - `firebase functions:secrets:set RESEND_API_KEY`
   - `firebase functions:secrets:set RESEND_FROM_EMAIL`
   - `firebase functions:secrets:set RESEND_TO_EMAIL`
4. Deploy functions and hosting:
   - `firebase deploy --only functions,hosting`

### Local development

- Start app: `npm run dev`
- Optional local API override in `.env`:
  - `VITE_BOOKING_API_URL=https://us-central1-<your-project-id>.cloudfunctions.net/bookAppointment`

When deployed with Firebase Hosting rewrite, the frontend will use `/api/book-appointment` automatically.
