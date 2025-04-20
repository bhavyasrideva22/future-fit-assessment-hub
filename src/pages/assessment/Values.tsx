
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentContext } from "@/App";
import QuestionLayout from "@/components/assessment/QuestionLayout";

// Sample questions for Values & Motivation section
const questions = [
  {
    id: "val1",
    question: "Which of these is most important to you in a job?",
    options: [
      { id: "A", text: "Making a positive impact on society" },
      { id: "B", text: "Opportunities for growth and advancement" },
      { id: "C", text: "Work-life balance and stability" },
    ],
  },
  {
    id: "val2",
    question: "What motivates you most in your work?",
    options: [
      { id: "A", text: "Recognition and respect from others" },
      { id: "B", text: "Personal accomplishment and growth" },
      { id: "C", text: "Financial rewards and security" },
    ],
  },
  {
    id: "val3",
    question: "Which workplace value is most important to you?",
    options: [
      { id: "A", text: "Innovation and creativity" },
      { id: "B", text: "Structure and predictability" },
      { id: "C", text: "Collaboration and teamwork" },
    ],
  },
  {
    id: "val4",
    question: "In an ideal job, how important is having autonomy?",
    options: [
      { id: "A", text: "Very important - I prefer to work independently" },
      { id: "B", text: "Somewhat important - Balance is key" },
      { id: "C", text: "Less important - I value clear direction" },
    ],
  },
  {
    id: "val5",
    question: "How do you feel about taking risks in your career?",
    options: [
      { id: "A", text: "I embrace risk as a path to greater rewards" },
      { id: "B", text: "I take calculated risks when the potential benefit is clear" },
      { id: "C", text: "I prefer stability and security over risk-taking" },
    ],
  },
  {
    id: "val6",
    question: "How important is it that your work aligns with your personal values?",
    options: [
      { id: "A", text: "Essential - I must believe in what I'm doing" },
      { id: "B", text: "Important, but I can compromise for the right opportunity" },
      { id: "C", text: "Nice to have, but not a primary concern" },
    ],
  },
  {
    id: "val7",
    question: "Which best describes your ideal company culture?",
    options: [
      { id: "A", text: "Fast-paced and innovative, embracing change" },
      { id: "B", text: "Collaborative and supportive, valuing relationships" },
      { id: "C", text: "Structured and stable, with clear processes" },
    ],
  },
  {
    id: "val8",
    question: "How important is it to you to see the impact of your work?",
    options: [
      { id: "A", text: "Very important - I need to see tangible results" },
      { id: "B", text: "Important - I want to know my work matters" },
      { id: "C", text: "Less important - Doing my job well is enough" },
    ],
  },
  {
    id: "val9",
    question: "Which would be most fulfilling to you in a career?",
    options: [
      { id: "A", text: "Creating innovative solutions to complex problems" },
      { id: "B", text: "Helping others and making a difference in their lives" },
      { id: "C", text: "Building something successful and lasting" },
    ],
  },
  {
    id: "val10",
    question: "How important is continuous learning in your career?",
    options: [
      { id: "A", text: "Essential - I want to constantly develop new skills" },
      { id: "B", text: "Important - I enjoy learning, but also applying what I know" },
      { id: "C", text: "Less important - I prefer to master specific skills" },
    ],
  },
];

const AssessmentValues = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const assessmentContext = useContext(AssessmentContext);
  
  if (!assessmentContext) {
    return <div>Loading assessment...</div>;
  }
  
  const { values, setAnswers, setCurrentSection } = assessmentContext;
  
  // Set current section on component mount
  setCurrentSection("values");
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers("values", questionId, answer);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Move to results page
      navigate("/results");
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // Go back to previous section
      navigate("/assessment/interests");
    }
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2" style={{color: "hsl(var(--values))"}}>
          Values & Motivation
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Section 3 of 3: Understand what drives you and what you value most in your work.
        </p>
        
        <div className="mb-8">
          <Progress value={progress} className="h-2" style={{backgroundColor: "hsl(var(--values) / 0.2)"}} />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Section 3/3</span>
          </div>
        </div>
        
        <Card className="p-6">
          <QuestionLayout
            question={questions[currentQuestion]}
            selectedAnswer={values[questions[currentQuestion].id]}
            onSelectAnswer={handleAnswer}
          />
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!values[questions[currentQuestion].id]}
              style={{backgroundColor: "hsl(var(--values))"}}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "View Results"}
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

export default AssessmentValues;
