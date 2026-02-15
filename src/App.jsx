import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PricingPage from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import RiskDisclosure from './pages/RiskDisclosure';
import HowItWorksPage from './pages/HowItWorks';

// Signals - Options Trading
import OptionsTradingSignals from './pages/Signals/OptionsTrading/OptionsTradingSignals';

// Signals - Stock Trading
import StockSignals from './pages/Signals/StockSignals/StockSignals';
import DayTrading from './pages/Signals/StockSignals/DayTrading';
import Momentum from './pages/Signals/StockSignals/Momentum';
import StockSwing from './pages/Signals/StockSignals/Swing';
import Earnings from './pages/Signals/StockSignals/Earnings';
import Gap from './pages/Signals/StockSignals/Gap';

// Signals - Swing Trading
import SwingSignals from './pages/Signals/SwingTrading/SwingSignals';

// Education
import EducationHub from './pages/Education/EducationHub';
import ArticlePage from './pages/Education/ArticlePage';
import WhatAreTradingSignals from './pages/Education/WhatAreTradingSignals';
import HowOptionsTradingWorks from './pages/Education/HowOptionsTradingWorks';
import WhatIsLottoOptions from './pages/Education/WhatIsLottoOptions';
import ZeroDTEOptionsExplained from './pages/Education/ZeroDTEOptionsExplained';
import HowToUseSignals from './pages/Education/HowToUseSignals';

// Compare Trading
import BestOptionsSignals from './pages/CompareTrading/BestOptionsSignals';
import BestPlatform from './pages/CompareTrading/BestPlatform';
import VsCopyTrading from './pages/CompareTrading/VsCopyTrading';
import FreeVsPaid from './pages/CompareTrading/FreeVsPaid';

// Trading Tools
import BeginnersGuide from './pages/TradingTools/BeginnersGuide';
import AdvancedOptions from './pages/TradingTools/AdvancedOptions';
import RiskGuide from './pages/TradingTools/RiskGuide';
import TradingApp from './pages/TradingTools/TradingApp';
import RealTimeAlerts from './pages/TradingTools/RealTimeAlerts';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />

        {/* Signals - Options */}
        <Route path="/products/options-signals" element={<OptionsTradingSignals />} />

        {/* Signals - Stock Trading */}
        <Route path="/products/stock-signals" element={<StockSignals />} />
        <Route path="/products/stock-signals/day-trading" element={<DayTrading />} />
        <Route path="/products/stock-signals/momentum" element={<Momentum />} />
        <Route path="/products/stock-signals/swing" element={<StockSwing />} />
        <Route path="/products/stock-signals/earnings" element={<Earnings />} />
        <Route path="/products/stock-signals/gap" element={<Gap />} />

        {/* Signals - Other */}
        <Route path="/products/swing-trading-signals" element={<SwingSignals />} />

        {/* Trading Education */}
        <Route path="/education" element={<EducationHub />} />
        <Route path="/education/what-are-trading-signals" element={<WhatAreTradingSignals />} />
        <Route path="/education/how-options-trading-works" element={<HowOptionsTradingWorks />} />
        <Route path="/education/what-is-lotto-options" element={<WhatIsLottoOptions />} />
        <Route path="/education/0dte-options-explained" element={<ZeroDTEOptionsExplained />} />
        <Route path="/education/how-to-use-trading-signals" element={<HowToUseSignals />} />
        <Route path="/education/:slug" element={<ArticlePage />} />

        {/* Compare Trading Signals */}
        <Route path="/compare/best-options-trading-signals" element={<BestOptionsSignals />} />
        <Route path="/compare/best-trading-signals-platform" element={<BestPlatform />} />
        <Route path="/compare/options-trading-signals-vs-copy-trading" element={<VsCopyTrading />} />
        <Route path="/compare/free-vs-paid-trading-signals" element={<FreeVsPaid />} />

        {/* Trading Tools & Access */}
        <Route path="/tools/beginners" element={<BeginnersGuide />} />
        <Route path="/tools/advanced-options" element={<AdvancedOptions />} />
        <Route path="/tools/risk-guide" element={<RiskGuide />} />
        <Route path="/tools/app" element={<TradingApp />} />
        <Route path="/tools/real-time-alerts" element={<RealTimeAlerts />} />

        {/* Legacy Routes for Compatibility */}
        <Route path="/beginners" element={<BeginnersGuide />} />
        <Route path="/advanced-options" element={<AdvancedOptions />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
