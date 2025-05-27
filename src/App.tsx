
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SchemeCost from "./pages/SchemeCost";
import ClientPricing from "./pages/ClientPricing";
import MarginSimulator from "./pages/MarginSimulator";
import FeeCalculator from "./pages/FeeCalculator";
import Settings from "./pages/Settings";
import ScenarioEditor from "./pages/ScenarioEditor";
import ScenarioReview from "./pages/ScenarioReview";
import FeeCalculatorDetailed from "./pages/FeeCalculatorDetailed";
import AnomalyReview from "./pages/AnomalyReview";
import AnomalyResolution from "./pages/AnomalyResolution";
import AIPerformance from "./pages/AIPerformance";
import AITraining from "./pages/AITraining";
import AgentChat from "./pages/AgentChat";
import PredictiveAlerts from "./pages/PredictiveAlerts";
import BulkProcessing from "./pages/BulkProcessing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scheme-cost" element={<SchemeCost />} />
          <Route path="/client-pricing" element={<ClientPricing />} />
          <Route path="/margin-simulator" element={<MarginSimulator />} />
          <Route path="/calculator" element={<FeeCalculator />} />
          <Route path="/scenario-editor" element={<ScenarioEditor />} />
          <Route path="/scenario-review" element={<ScenarioReview />} />
          <Route path="/fee-calculator-detailed" element={<FeeCalculatorDetailed />} />
          <Route path="/anomaly-review" element={<AnomalyReview />} />
          <Route path="/anomaly-resolution" element={<AnomalyResolution />} />
          <Route path="/ai-performance" element={<AIPerformance />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/agent-chat" element={<AgentChat />} />
          <Route path="/predictive-alerts" element={<PredictiveAlerts />} />
          <Route path="/bulk-processing" element={<BulkProcessing />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
