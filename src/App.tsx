import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import Skills from "./pages/Skills";
import Playground from "./pages/Playground";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AIAssistantDemo from "./pages/demos/AIAssistantDemo";
import SuperAppDemo from "./pages/demos/SuperAppDemo";
import BlockchainDemo from "./pages/demos/BlockchainDemo";
import UnityGameDemo from "./pages/demos/UnityGameDemo";
import AnalyticsDashboardDemo from "./pages/demos/AnalyticsDashboardDemo";
import AIImageGenDemo from "./pages/demos/AIImageGenDemo";
import NFTMarketplaceDemo from "./pages/demos/NFTMarketplaceDemo";
import FitnessAppDemo from "./pages/demos/FitnessAppDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo/ai-assistant" element={<AIAssistantDemo />} />
            <Route path="/demo/super-app" element={<SuperAppDemo />} />
            <Route path="/demo/blockchain" element={<BlockchainDemo />} />
            <Route path="/demo/unity-game" element={<UnityGameDemo />} />
            <Route path="/demo/analytics" element={<AnalyticsDashboardDemo />} />
            <Route path="/demo/ai-image" element={<AIImageGenDemo />} />
            <Route path="/demo/nft-marketplace" element={<NFTMarketplaceDemo />} />
            <Route path="/demo/fitness-app" element={<FitnessAppDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
