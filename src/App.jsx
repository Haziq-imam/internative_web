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
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

// Signals
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockTradingSignals from './pages/Signals/StockTradingSignals';
import SwingTradingSignals from './pages/Signals/SwingTradingSignals';
import TradingEducationPage from './pages/Signals/TradingEducationPage';
import CompareTradingSignals from './pages/Signals/CompareTradingSignals';
import TradingToolsAndAccess from './pages/Signals/TradingToolsAndAccess';

// Signals Sub-pages - Stock
import DayTradingStocks from './pages/Signals/StockTradingSignals/DayTradingStocks';
import MomentumStockSignals from './pages/Signals/StockTradingSignals/MomentumStockSignals';
import SwingTradingStocks from './pages/Signals/StockTradingSignals/SwingTradingStocks';
import EarningsTradingStrategy from './pages/Signals/StockTradingSignals/EarningsTradingStrategy';
import GapUpGapDownStocks from './pages/Signals/StockTradingSignals/GapUpGapDownStocks';

// Signals Sub-pages - Education
import WhatAreTradingSignals from './pages/Signals/TradingEducation/WhatAreTradingSignals';
import HowOptionsTradingWorks from './pages/Signals/TradingEducation/HowOptionsTradingWorks';
import WhatIsLottoOptions from './pages/Signals/TradingEducation/WhatIsLottoOptions';
import ZeroDTEOptionsExplained from './pages/Signals/TradingEducation/ZeroDTEOptionsExplained';
import HowToUseSignals from './pages/Signals/TradingEducation/HowToUseSignals';

// Signals Sub-pages - Compare
import BestOptionsTradingSignals from './pages/Signals/CompareTradingSignals/BestOptionsTradingSignals';
import BestTradingSignalsPlatform from './pages/Signals/CompareTradingSignals/BestTradingSignalsPlatform';
import OptionsTradingSignalsVsCopyTrading from './pages/Signals/CompareTradingSignals/OptionsTradingSignalsVsCopyTrading';
import FreeVsPaidTradingSignals from './pages/Signals/CompareTradingSignals/FreeVsPaidTradingSignals';

// Signals Sub-pages - Tools
import TradingSignalsForBeginners from './pages/Signals/TradingToolsAndAccess/TradingSignalsForBeginners';
import AdvancedOptionsTrading from './pages/Signals/TradingToolsAndAccess/AdvancedOptionsTrading';
import TradingSignalsRiskGuide from './pages/Signals/TradingToolsAndAccess/TradingSignalsRiskGuide';
import TradingSignalsApp from './pages/Signals/TradingToolsAndAccess/TradingSignalsApp';
import RealTimeTradingAlerts from './pages/Signals/TradingToolsAndAccess/RealTimeTradingAlerts';

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
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />

        {/* Signals - Main Categories */}
        <Route path="/signals/options-trading-signals" element={<OptionsTradingSignals />} />
        <Route path="/signals/stock-trading-signals" element={<StockTradingSignals />} />
        <Route path="/signals/swing-trading-signals" element={<SwingTradingSignals />} />
        <Route path="/trading-education" element={<TradingEducationPage />} />
        <Route path="/compare-trading-signals" element={<CompareTradingSignals />} />
        <Route path="/trading-tools-access" element={<TradingToolsAndAccess />} />

        {/* Signals - Stock Sub-pages */}
        <Route path="/signals/day-trading-stocks" element={<DayTradingStocks />} />
        <Route path="/signals/momentum-stock-signals" element={<MomentumStockSignals />} />
        <Route path="/signals/swing-trading-stocks" element={<SwingTradingStocks />} />
        <Route path="/signals/earnings-trading-strategy" element={<EarningsTradingStrategy />} />
        <Route path="/signals/gap-up-gap-down-stocks" element={<GapUpGapDownStocks />} />

        {/* Signals - Education Sub-pages */}
        <Route path="/trading-education/what-are-trading-signals" element={<WhatAreTradingSignals />} />
        <Route path="/trading-education/how-options-trading-works" element={<HowOptionsTradingWorks />} />
        <Route path="/trading-education/what-is-lotto-options" element={<WhatIsLottoOptions />} />
        <Route path="/trading-education/0dte-options-explained" element={<ZeroDTEOptionsExplained />} />
        <Route path="/trading-education/how-to-use-trading-signals" element={<HowToUseSignals />} />

        {/* Signals - Compare Sub-pages */}
        <Route path="/compare-trading-signals/best-options-trading-signals" element={<BestOptionsTradingSignals />} />
        <Route path="/compare-trading-signals/best-trading-signals-platform" element={<BestTradingSignalsPlatform />} />
        <Route path="/compare-trading-signals/options-trading-signals-vs-copy-trading" element={<OptionsTradingSignalsVsCopyTrading />} />
        <Route path="/compare-trading-signals/free-vs-paid-trading-signals" element={<FreeVsPaidTradingSignals />} />

        {/* Signals - Tools Sub-pages */}
        <Route path="/trading-tools-access/risk-guide" element={<TradingSignalsRiskGuide />} />
        <Route path="/trading-tools-access/trading-signals-app" element={<TradingSignalsApp />} />
        <Route path="/trading-tools-access/real-time-alerts" element={<RealTimeTradingAlerts />} />
        <Route path="/trading-tools-access/beginners" element={<TradingSignalsForBeginners />} />
        <Route path="/trading-tools-access/advanced-options" element={<AdvancedOptionsTrading />} />

        {/* Legacy Routes for Compatibility */}
        <Route path="/beginners" element={<TradingSignalsForBeginners />} />
        <Route path="/advanced-options" element={<AdvancedOptionsTrading />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
