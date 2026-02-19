import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Core Pages (Main)
import Home from './pages/Main/Home';
import About from './pages/Main/About';
import PricingPage from './pages/Main/Pricing';
import Contact from './pages/Main/Contact';
import FAQ from './pages/Main/FAQ';
import HowItWorksPage from './pages/Main/HowItWorks';
import PerformancePage from './pages/Main/Performance';

// Legal Pages
import RiskDisclosure from './pages/Legal/RiskDisclosure';
import TermsOfService from './pages/Legal/TermsOfService';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import RefundPolicy from './pages/Legal/RefundPolicy';

// Signals - Main Categories
import OptionsTradingSignals from './pages/Signals/OptionsTradingSignals';
import StockTradingSignals from './pages/Signals/StockTradingSignals';
import CryptoSignals from './pages/Signals/CryptoSignals';
import SwingTradingSignals from './pages/Signals/SwingTradingSignals';
import DayTradingSignals from './pages/Signals/DayTradingSignals';
import FuturesTradingSignals from './pages/Signals/FuturesTradingSignals';

// Signals - Stock Sub-pages (Secondary)
import DayTradingStocks from './pages/Signals/Secondary/DayTradingStocks';
import MomentumStockSignals from './pages/Signals/Secondary/MomentumStockSignals';
import SwingTradingStocks from './pages/Signals/Secondary/SwingTradingStocks';
import EarningsTradingStrategy from './pages/Signals/Secondary/EarningsTradingStrategy';
import GapUpGapDownStocks from './pages/Signals/Secondary/GapUpGapDownStocks';

// Signals - Options Sub-pages (Secondary)
import OptionsSwingTrading from './pages/Signals/Secondary/OptionsSwingTrading';
import OptionsFlowSignals from './pages/Signals/Secondary/OptionsFlowSignals';
import UnusualOptionsActivity from './pages/Signals/Secondary/UnusualOptionsActivity';
import OptionsGreeksExplained from './pages/Signals/Secondary/OptionsGreeksExplained';
import OptionsRiskManagement from './pages/Signals/Secondary/OptionsRiskManagement';
import InstitutionalOptionsTrading from './pages/Signals/Secondary/InstitutionalOptionsTrading';

// Education Pages
import EducationHub from './pages/Education/EducationHub';
import WhatAreTradingSignals from './pages/Education/Secondary/WhatAreTradingSignals';
import HowOptionsTradingWorks from './pages/Education/Secondary/HowOptionsTradingWorks';
import WhatIsLottoOptions from './pages/Education/Secondary/WhatIsLottoOptions';
import ZeroDTEOptionsExplained from './pages/Education/Secondary/ZeroDTEOptionsExplained';
import HowToUseSignals from './pages/Education/Secondary/HowToUseTradingSignals';

// Compare Pages
import CompareHub from './pages/Compare/CompareHub';
import BestOptionsSignals from './pages/Compare/Secondary/BestOptionsSignals';
import BestPlatform from './pages/Compare/Secondary/BestPlatform';
import OptionsVsCopy from './pages/Compare/Secondary/OptionsVsCopy';
import FreeVsPaid from './pages/Compare/Secondary/FreeVsPaid';

// Tools Pages
import ToolsHub from './pages/Tools/ToolsHub';
import TradingSignalsForBeginners from './pages/Tools/Secondary/TradingSignalsForBeginners';
import AdvancedOptionsTrading from './pages/Tools/Secondary/AdvancedOptionsTrading';
import RiskGuide from './pages/Tools/Secondary/RiskGuide';
import SignalsApp from './pages/Tools/Secondary/SignalsApp';
import RealTimeAlerts from './pages/Tools/Secondary/RealTimeAlerts';

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

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;

