
import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import About from './pages/About';
import SmsConsent from './pages/SmsConsent';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 border-b border-black/10 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-black">
        Victor<span>.</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
        <Link to="/features" className="text-black hover:text-gray-500 transition-colors">Features</Link>
        <Link to="/about" className="text-black hover:text-gray-500 transition-colors">About</Link>
        <Link to="/support" className="text-black hover:text-gray-500 transition-colors">Support</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-black text-white px-6 py-2 text-xs font-black uppercase tracking-widest transition-all hover:bg-gray-800">
          Download
        </button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-white border-t border-black/10 py-20 px-4 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter text-black">Victor</h2>
        <p className="text-gray-500 max-w-sm font-bold uppercase text-xs tracking-widest leading-relaxed">
          The accountability coach that doesn't care about your feelings. We care about your results.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-black uppercase mb-6 tracking-widest text-black">Product</h4>
        <ul className="space-y-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <li><Link to="/features" className="hover:text-black transition-colors text-gray-600">Features</Link></li>
          <li><Link to="/about" className="hover:text-black transition-colors text-gray-600">About</Link></li>
          <li><Link to="/support" className="hover:text-black transition-colors text-gray-600">FAQ</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-black uppercase mb-6 tracking-widest text-black">Legal</h4>
        <ul className="space-y-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <li><Link to="/privacy" className="hover:text-black transition-colors text-gray-600">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-black transition-colors text-gray-600">Terms of Service</Link></li>
          <li><Link to="/sms-consent" className="hover:text-black transition-colors text-gray-600">SMS Consent</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
      <p>© {new Date().getFullYear()} Victor App. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-black transition-colors">Twitter</a>
        <a href="#" className="hover:text-black transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white bg-white">
        <Navbar />
        <main className="flex-grow pt-20 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sms-consent" element={<SmsConsent />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
