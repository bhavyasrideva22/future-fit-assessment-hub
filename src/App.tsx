import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssessmentWorkStyle from "./pages/assessment/WorkStyle";
import AssessmentInterests from "./pages/assessment/Interests";
import AssessmentValues from "./pages/assessment/Values";
import Results from "./pages/Results";
import AdminDashboard from "./pages/AdminDashboard";

// Assessment Context for state management
export interface AssessmentState {
  workStyle: Record<string, string>;
  interests: Record<string, string>;
  values: Record<string, string>;
  setAnswers: (section: string, questionId: string, answer: string) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const AssessmentContext = createContext<AssessmentState | null>(null);

const queryClient = new QueryClient();

const App = () => {
  // State for assessment answers
  const [workStyle, setWorkStyle] = useState<Record<string, string>>({});
  const [interests, setInterests] = useState<Record<string, string>>({});
  const [values, setValues] = useState<Record<string, string>>({});
  const [currentSection, setCurrentSection] = useState<string>("");

  // Function to update answers
  const setAnswers = (section: string, questionId: string, answer: string) => {
    switch (section) {
      case "workStyle":
        setWorkStyle((prev) => ({ ...prev, [questionId]: answer }));
        break;
      case "interests":
        setInterests((prev) => ({ ...prev, [questionId]: answer }));
        break;
      case "values":
        setValues((prev) => ({ ...prev, [questionId]: answer }));
        break;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AssessmentContext.Provider
        value={{
          workStyle,
          interests,
          values,
          setAnswers,
          currentSection,
          setCurrentSection,
        }}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/assessment/work-style" element={<AssessmentWorkStyle />} />
              <Route path="/assessment/interests" element={<AssessmentInterests />} />
              <Route path="/assessment/values" element={<AssessmentValues />} />
              <Route path="/results" element={<Results />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AssessmentContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
