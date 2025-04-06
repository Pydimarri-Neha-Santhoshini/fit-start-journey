
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          <Route path="/workouts" element={<Index />} />
          <Route path="/nutrition" element={<Index />} />
          <Route path="/progress" element={<Index />} />
          <Route path="/community" element={<Index />} />
          <Route path="/goals" element={<Index />} />
          <Route path="/nutrition/plan" element={<Index />} />
          <Route path="/nutrition/create" element={<Index />} />
          <Route path="/progress/report" element={<Index />} />
          <Route path="/workout/cardio" element={<Index />} />
          <Route path="/workout/strength" element={<Index />} />
          <Route path="/workout/yoga" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
