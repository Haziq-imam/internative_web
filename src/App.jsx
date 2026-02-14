import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PricingPage from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import RiskDisclosure from './pages/RiskDisclosure';

// Signals
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockSignals from './pages/Signals/StockSignals';
import SwingSignals from './pages/Signals/SwingSignals';

// Education
import ArticlePage from './pages/Education/ArticlePage';
import Beginners from './pages/Education/Beginners';
import AdvancedOptions from './pages/Education/AdvancedOptions';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />

        {/* Signals - Options */}
        <Route path="/signals/options" element={<OptionsTradingSignals />} />
        <Route path="/signals/options-signals" element={<OptionsTradingSignals />} />

        {/* Signals - Stock Trading */}
        <Route path="/signals/stocks" element={<StockSignals />} />
        <Route path="/signals/stocks/day-trading" element={<StockSignals type="day-trading" />} />
        <Route path="/signals/stocks/momentum" element={<StockSignals type="momentum" />} />
        <Route path="/signals/stocks/swing" element={<StockSignals type="swing" />} />
        <Route path="/signals/stocks/earnings" element={<StockSignals type="earnings" />} />
        <Route path="/signals/stocks/gap" element={<StockSignals type="gap" />} />

        {/* Signals - Other */}
        <Route path="/signals/swing" element={<SwingSignals />} />

        {/* Trading Education */}
        <Route path="/education/what-are-trading-signals" element={<ArticlePage slug="what-are-trading-signals" />} />
        <Route path="/education/how-options-trading-works" element={<ArticlePage slug="how-options-trading-works" />} />
        <Route path="/education/what-is-lotto-options" element={<ArticlePage slug="what-is-lotto-options" />} />
        <Route path="/education/0dte-options-explained" element={<ArticlePage slug="0dte-options-explained" />} />
        <Route path="/education/how-to-use-trading-signals" element={<ArticlePage slug="how-to-use-trading-signals" />} />
        <Route path="/education/:slug" element={<ArticlePage />} />

        {/* Compare Trading Signals */}
        <Route path="/compare/best-options-trading-signals" element={<ArticlePage slug="best-options-trading-signals" />} />
        <Route path="/compare/best-trading-signals-platform" element={<ArticlePage slug="best-trading-signals-platform" />} />
        <Route path="/compare/options-trading-signals-vs-copy-trading" element={<ArticlePage slug="options-trading-signals-vs-copy-trading" />} />
        <Route path="/compare/free-vs-paid-trading-signals" element={<ArticlePage slug="free-vs-paid-trading-signals" />} />

        {/* Trading Tools & Access */}
        <Route path="/tools/beginners" element={<Beginners />} />
        <Route path="/tools/advanced-options" element={<AdvancedOptions />} />
        <Route path="/tools/risk-guide" element={<ArticlePage slug="risk-guide" />} />
        <Route path="/tools/app" element={<ArticlePage slug="trading-app" />} />
        <Route path="/tools/real-time-alerts" element={<ArticlePage slug="real-time-alerts" />} />

        {/* Legacy Routes for Compatibility */}
        <Route path="/beginners" element={<Beginners />} />
        <Route path="/advanced-options" element={<AdvancedOptions />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
