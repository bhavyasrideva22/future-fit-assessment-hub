
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentContext } from "@/App";
import QuestionLayout from "@/components/assessment/QuestionLayout";

// Sample questions for Work Style section
const questions = [
  {
    id: "ws1",
    question: "How do you prefer to approach problems?",
    options: [
      { id: "A", text: "Analyze all available information before deciding" },
      { id: "B", text: "Brainstorm creative solutions with a team" },
      { id: "C", text: "Trust my gut instinct and make quick decisions" },
    ],
  },
  {
    id: "ws2",
    question: "When working on projects, you prefer to:",
    options: [
      { id: "A", text: "Have a detailed plan with clear milestones" },
      { id: "B", text: "Adapt as you go, making adjustments as needed" },
      { id: "C", text: "Focus on the big picture and delegate details to others" },
    ],
  },
  {
    id: "ws3",
    question: "In a team setting, you typically:",
    options: [
      { id: "A", text: "Take charge and provide direction" },
      { id: "B", text: "Collaborate and seek consensus" },
      { id: "C", text: "Support others and help implement their ideas" },
    ],
  },
  {
    id: "ws4",
    question: "How do you handle tight deadlines?",
    options: [
      { id: "A", text: "Plan ahead to avoid last-minute pressure" },
      { id: "B", text: "Get energized by the pressure and rise to the challenge" },
      { id: "C", text: "Prioritize tasks and focus on what's most important" },
    ],
  },
  {
    id: "ws5",
    question: "When learning something new, you prefer to:",
    options: [
      { id: "A", text: "Read detailed instructions or watch tutorials" },
      { id: "B", text: "Jump in and learn through trial and error" },
      { id: "C", text: "Have someone walk you through it step by step" },
    ],
  },
  {
    id: "ws6",
    question: "Your ideal work environment is:",
    options: [
      { id: "A", text: "Quiet and focused, with minimal distractions" },
      { id: "B", text: "Collaborative and energetic, with lots of interaction" },
      { id: "C", text: "Flexible and varied, with changing tasks and settings" },
    ],
  },
  {
    id: "ws7",
    question: "When receiving feedback, you prefer it to be:",
    options: [
      { id: "A", text: "Direct and specific, focusing on areas to improve" },
      { id: "B", text: "Balanced, highlighting both strengths and weaknesses" },
      { id: "C", text: "Constructive and supportive, with clear guidance" },
    ],
  },
  {
    id: "ws8",
    question: "When facing a challenge, you typically:",
    options: [
      { id: "A", text: "Research different approaches before taking action" },
      { id: "B", text: "Tackle it head-on with determination" },
      { id: "C", text: "Seek advice or collaboration from others" },
    ],
  },
  {
    id: "ws9",
    question: "Your approach to organization is:",
    options: [
      { id: "A", text: "Highly structured with detailed systems" },
      { id: "B", text: "Somewhat organized with flexibility" },
      { id: "C", text: "More spontaneous, organizing as needed" },
    ],
  },
  {
    id: "ws10",
    question: "When communicating ideas, you prefer to:",
    options: [
      { id: "A", text: "Present detailed, well-researched information" },
      { id: "B", text: "Focus on the big picture and inspire others" },
      { id: "C", text: "Use examples and stories to illustrate points" },
    ],
  },
];

const AssessmentWorkStyle = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const assessmentContext = useContext(AssessmentContext);
  
  if (!assessmentContext) {
    return <div>Loading assessment...</div>;
  }
  
  const { workStyle, setAnswers, setCurrentSection } = assessmentContext;
  
  // Set current section on component mount
  setCurrentSection("workStyle");
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers("workStyle", questionId, answer);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Move to next section
      navigate("/assessment/interests");
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Work Style & Preferences</h1>
        <p className="text-center text-muted-foreground mb-6">
          Section 1 of 3: Discover how you prefer to approach work and collaborate with others.
        </p>
        
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Section 1/3</span>
          </div>
        </div>
        
        <Card className="p-6">
          <QuestionLayout
            question={questions[currentQuestion]}
            selectedAnswer={workStyle[questions[currentQuestion].id]}
            onSelectAnswer={handleAnswer}
          />
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!workStyle[questions[currentQuestion].id]}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Continue to Interests"}
            </Button>
          </div>
        </Card>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-primary underline hover:text-primary/80">
            Save and return later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentWorkStyle;
