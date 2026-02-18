import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Core Pages
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
import PerformancePage from './pages/Performance';

// Signals - Main Categories
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockTradingSignals from './pages/Signals/StockTradingSignals';
import CryptoSignals from './pages/Signals/CryptoSignals';
import SwingTradingSignals from './pages/Signals/SwingTradingSignals';
import DayTradingSignals from './pages/Signals/DayTradingSignals';
import FuturesTradingSignals from './pages/Signals/FuturesTradingSignals';

// Signals - Stock Sub-pages
import DayTradingStocks from './pages/Signals/StockTradingSignals/DayTradingStocks';
import MomentumStockSignals from './pages/Signals/StockTradingSignals/MomentumStockSignals';
import SwingTradingStocks from './pages/Signals/StockTradingSignals/SwingTradingStocks';
import EarningsTradingStrategy from './pages/Signals/StockTradingSignals/EarningsTradingStrategy';
import GapUpGapDownStocks from './pages/Signals/StockTradingSignals/GapUpGapDownStocks';

// Signals - Options Sub-pages (Guides)
import OptionsSwingTrading from './pages/Signals/OptionsSwingTrading';
import OptionsFlowSignals from './pages/Signals/OptionsFlowSignals';
import UnusualOptionsActivity from './pages/Signals/UnusualOptionsActivity';
import OptionsGreeksExplained from './pages/Signals/OptionsGreeksExplained';
import OptionsRiskManagement from './pages/Signals/OptionsRiskManagement';
import InstitutionalOptionsTrading from './pages/Signals/InstitutionalOptionsTrading';

// Education Pages
import EducationHub from './pages/Education/EducationHub';
import WhatAreTradingSignals from './pages/Education/WhatAreTradingSignals';
import HowOptionsTradingWorks from './pages/Education/HowOptionsTradingWorks';
import WhatIsLottoOptions from './pages/Education/WhatIsLottoOptions';
import ZeroDTEOptionsExplained from './pages/Education/ZeroDTEOptionsExplained';
import HowToUseSignals from './pages/Education/HowToUseTradingSignals';
import HowStockTradingWorks from './pages/Education/HowStockTradingWorks';
import IntroductionToOptions from './pages/Education/IntroductionToOptions';
import CryptoTradingBasics from './pages/Education/CryptoTradingBasics';
import Futures101 from './pages/Education/Futures101';
import ReadingChartsPatterns from './pages/Education/ReadingChartsPatterns';

// Compare Pages
import CompareHub from './pages/Compare/CompareHub';
import BestOptionsSignals from './pages/Compare/BestOptionsSignals';
import BestPlatform from './pages/Compare/BestPlatform';
import OptionsVsCopy from './pages/Compare/OptionsVsCopy';
import FreeVsPaid from './pages/Compare/FreeVsPaid';

// Tools Pages
import ToolsHub from './pages/Tools/ToolsHub';
import TradingSignalsForBeginners from './pages/Tools/TradingSignalsForBeginners';
import AdvancedOptionsTrading from './pages/Tools/AdvancedOptions';
import RiskGuide from './pages/Tools/RiskGuide';
import SignalsApp from './pages/Tools/SignalsApp';
import RealTimeAlerts from './pages/Tools/RealTimeAlerts';

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
        <Route path="/performance" element={<PerformancePage />} />

        {/* Signals - Main Categories */}
        <Route path="/signals/options-trading-signals" element={<OptionsTradingSignals />} />
        <Route path="/signals/stock-trading-signals" element={<StockTradingSignals />} />
        <Route path="/signals/crypto-trading-signals" element={<CryptoSignals />} />
        <Route path="/signals/swing-trading-signals" element={<SwingTradingSignals />} />
        <Route path="/signals/day-trading-signals" element={<DayTradingSignals />} />
        <Route path="/signals/futures-trading-signals" element={<FuturesTradingSignals />} />

        {/* Signals - Stock Sub-pages */}
        <Route path="/signals/day-trading-stocks" element={<DayTradingStocks />} />
        <Route path="/signals/momentum-stock-signals" element={<MomentumStockSignals />} />
        <Route path="/signals/swing-trading-stocks" element={<SwingTradingStocks />} />
        <Route path="/signals/earnings-trading-strategy" element={<EarningsTradingStrategy />} />
        <Route path="/signals/gap-up-gap-down-stocks" element={<GapUpGapDownStocks />} />

        {/* Signals - Options Sub-pages (Guides) */}
        <Route path="/signals/options-swing-trading" element={<OptionsSwingTrading />} />
        <Route path="/signals/options-flow-signals" element={<OptionsFlowSignals />} />
        <Route path="/signals/unusual-options-activity" element={<UnusualOptionsActivity />} />
        <Route path="/signals/options-greeks-explained" element={<OptionsGreeksExplained />} />
        <Route path="/signals/options-risk-management" element={<OptionsRiskManagement />} />
        <Route path="/signals/institutional-options-trading" element={<InstitutionalOptionsTrading />} />

        {/* Education Sub-pages */}
        <Route path="/trading-education" element={<EducationHub />} />
        <Route path="/trading-education/what-are-trading-signals" element={<WhatAreTradingSignals />} />
        <Route path="/trading-education/how-options-trading-works" element={<HowOptionsTradingWorks />} />
        <Route path="/trading-education/what-is-lotto-options" element={<WhatIsLottoOptions />} />
        <Route path="/trading-education/0dte-options-explained" element={<ZeroDTEOptionsExplained />} />
        <Route path="/trading-education/how-to-use-trading-signals" element={<HowToUseSignals />} />
        <Route path="/trading-education/how-stock-trading-works" element={<HowStockTradingWorks />} />
        <Route path="/trading-education/introduction-to-options" element={<IntroductionToOptions />} />
        <Route path="/trading-education/crypto-trading-basics" element={<CryptoTradingBasics />} />
        <Route path="/trading-education/futures-101" element={<Futures101 />} />
        <Route path="/trading-education/reading-charts-patterns" element={<ReadingChartsPatterns />} />

        {/* Compare Sub-pages */}
        <Route path="/compare-trading-signals" element={<CompareHub />} />
        <Route path="/compare-trading-signals/best-options-trading-signals" element={<BestOptionsSignals />} />
        <Route path="/compare-trading-signals/best-trading-signals-platform" element={<BestPlatform />} />
        <Route path="/compare-trading-signals/options-trading-signals-vs-copy-trading" element={<OptionsVsCopy />} />
        <Route path="/compare-trading-signals/free-vs-paid-trading-signals" element={<FreeVsPaid />} />

        {/* Tools Sub-pages */}
        <Route path="/trading-tools-access" element={<ToolsHub />} />
        <Route path="/trading-tools-access/trading-signals-for-beginners" element={<TradingSignalsForBeginners />} />
        <Route path="/trading-tools-access/advanced-options-trading" element={<AdvancedOptionsTrading />} />
        <Route path="/trading-tools-access/trading-signals-risk-guide" element={<RiskGuide />} />
        <Route path="/trading-tools-access/trading-signals-app" element={<SignalsApp />} />
        <Route path="/trading-tools-access/real-time-trading-alerts" element={<RealTimeAlerts />} />

        {/* Legacy / Sitemap Aliases for Compatibility */}
        <Route path="/signals/options-signals" element={<OptionsTradingSignals />} />
        <Route path="/products/stock-signals" element={<StockTradingSignals />} />
        <Route path="/products/swing-trading-signals" element={<SwingTradingSignals />} />
        <Route path="/education" element={<EducationHub />} />
        <Route path="/beginners" element={<TradingSignalsForBeginners />} />
        <Route path="/advanced-options" element={<AdvancedOptionsTrading />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
