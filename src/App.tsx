
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolanaProvider from "./components/SolanaProvider";
import Index from "./pages/Index";
import Token from "./pages/Token";
import Swap from "./pages/Swap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SolanaProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/token" element={<Token />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SolanaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
