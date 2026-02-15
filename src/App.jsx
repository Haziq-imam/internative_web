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

// Signals
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockTradingSignals from './pages/Signals/StockTradingSignals';
import SwingTradingSignals from './pages/Signals/SwingTradingSignals';
import TradingEducation from './pages/Signals/TradingEducation';
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

        {/* Signals - Main Categories */}
        <Route path="/products/options-signals" element={<OptionsTradingSignals />} />
        <Route path="/products/stock-signals" element={<StockTradingSignals />} />
        <Route path="/products/swing-trading-signals" element={<SwingTradingSignals />} />
        <Route path="/education" element={<TradingEducation />} />
        <Route path="/compare" element={<CompareTradingSignals />} />
        <Route path="/tools" element={<TradingToolsAndAccess />} />

        {/* Signals - Stock Sub-pages */}
        <Route path="/products/stock-signals/day-trading" element={<DayTradingStocks />} />
        <Route path="/products/stock-signals/momentum" element={<MomentumStockSignals />} />
        <Route path="/products/stock-signals/swing" element={<SwingTradingStocks />} />
        <Route path="/products/stock-signals/earnings" element={<EarningsTradingStrategy />} />
        <Route path="/products/stock-signals/gap" element={<GapUpGapDownStocks />} />

        {/* Signals - Education Sub-pages */}
        <Route path="/education/what-are-trading-signals" element={<WhatAreTradingSignals />} />
        <Route path="/education/how-options-trading-works" element={<HowOptionsTradingWorks />} />
        <Route path="/education/what-is-lotto-options" element={<WhatIsLottoOptions />} />
        <Route path="/education/0dte-options-explained" element={<ZeroDTEOptionsExplained />} />
        <Route path="/education/how-to-use-trading-signals" element={<HowToUseSignals />} />

        {/* Signals - Compare Sub-pages */}
        <Route path="/compare/best-options-trading-signals" element={<BestOptionsTradingSignals />} />
        <Route path="/compare/best-trading-signals-platform" element={<BestTradingSignalsPlatform />} />
        <Route path="/compare/options-trading-signals-vs-copy-trading" element={<OptionsTradingSignalsVsCopyTrading />} />
        <Route path="/compare/free-vs-paid-trading-signals" element={<FreeVsPaidTradingSignals />} />

        {/* Signals - Tools Sub-pages */}
        <Route path="/tools/beginners" element={<TradingSignalsForBeginners />} />
        <Route path="/tools/advanced-options" element={<AdvancedOptionsTrading />} />
        <Route path="/tools/risk-guide" element={<TradingSignalsRiskGuide />} />
        <Route path="/tools/app" element={<TradingSignalsApp />} />
        <Route path="/tools/real-time-alerts" element={<RealTimeTradingAlerts />} />

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
