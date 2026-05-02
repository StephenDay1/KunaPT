import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import TeamPage from './pages/TeamPage';
import TeamMemberDetailPage from './pages/TeamMemberDetailPage';
import FAQPage from './pages/FAQPage';
import PageNotFound from './pages/PageNotFound';
import { scrollElementBelowFixedNav } from './utils/scrollBelowNav';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const run = () => {
        const element = document.getElementById(id);
        if (element) scrollElementBelowFixedNav(element);
      };
      // Let route/layout (e.g. FAQ accordion) settle before measuring.
      requestAnimationFrame(() => {
        requestAnimationFrame(run);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/:slug" element={<TeamMemberDetailPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Error 404 */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
