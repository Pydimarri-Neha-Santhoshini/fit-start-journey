
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkoutsPage from "./pages/WorkoutsPage";
import NutritionPage from "./pages/NutritionPage";
import ProgressPage from "./pages/ProgressPage";
import CommunityPage from "./pages/CommunityPage";
import WorkoutDetailPage from "./pages/WorkoutDetailPage";
import TrainingPlansPage from "./pages/TrainingPlansPage";
import WorkoutDayPage from "./pages/WorkoutDayPage";
import ExercisePage from "./pages/ExercisePage";
import AiRecommendationsPage from "./pages/AiRecommendationsPage";
import BmiCalculatorPage from "./pages/BmiCalculatorPage";
import SettingsPage from "./pages/SettingsPage";
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
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workout/:type" element={<WorkoutDetailPage />} />
          <Route path="/workout/:type/plans" element={<TrainingPlansPage />} />
          <Route path="/workout/:type/:day" element={<WorkoutDayPage />} />
          <Route path="/workout/:type/:day/exercise" element={<ExercisePage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/ai-recommendations" element={<AiRecommendationsPage />} />
          <Route path="/bmi-calculator" element={<BmiCalculatorPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
