import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PricingPage from './pages/Pricing';
import Contact from './pages/Contact';
import RiskDisclosure from './pages/RiskDisclosure';

// Signals
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockSignals from './pages/Signals/StockSignals';
import CryptoSignals from './pages/Signals/CryptoSignals';
import SwingSignals from './pages/Signals/SwingSignals';
import FuturesSignals from './pages/Signals/FuturesSignals';

// Education
import EducationHub from './pages/Education/EducationHub';
import ArticlePage from './pages/Education/ArticlePage';
import Beginners from './pages/Education/Beginners';
import AdvancedOptions from './pages/Education/AdvancedOptions';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />

        {/* Signals Routes */}
        <Route path="/signals/options" element={<OptionsTradingSignals />} />
        <Route path="/signals/options-signals" element={<OptionsTradingSignals />} />
        <Route path="/signals/stocks" element={<StockSignals />} />
        <Route path="/signals/stocks/day-trading" element={<StockSignals type="day-trading" />} />
        <Route path="/signals/stocks/momentum" element={<StockSignals type="momentum" />} />
        <Route path="/signals/stocks/swing" element={<StockSignals type="swing" />} />
        <Route path="/signals/stocks/earnings" element={<StockSignals type="earnings" />} />
        <Route path="/signals/stocks/gap" element={<StockSignals type="gap" />} />
        <Route path="/signals/crypto" element={<CryptoSignals />} />
        <Route path="/signals/swing" element={<SwingSignals />} />
        <Route path="/signals/futures" element={<FuturesSignals />} />

        {/* Comparison Routes */}
        <Route path="/compare/best-options-signals" element={<ArticlePage />} />
        <Route path="/compare/best-trading-signals-platform" element={<ArticlePage />} />
        <Route path="/compare/options-trading-signals-vs-copy-trading" element={<ArticlePage />} />
        <Route path="/compare/free-vs-paid-trading-signals" element={<ArticlePage />} />

        {/* Education Routes */}
        <Route path="/education" element={<EducationHub />} />
        <Route path="/education/:slug" element={<ArticlePage />} />
        <Route path="/beginners" element={<Beginners />} />
        <Route path="/advanced-options" element={<AdvancedOptions />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
