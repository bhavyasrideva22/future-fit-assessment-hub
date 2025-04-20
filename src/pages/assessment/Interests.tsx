
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentContext } from "@/App";
import QuestionLayout from "@/components/assessment/QuestionLayout";

// Sample questions for Core Interests & Skills section
const questions = [
  {
    id: "int1",
    question: "Which of these activities would you most enjoy?",
    options: [
      { id: "A", text: "Designing and building something with your hands" },
      { id: "B", text: "Analyzing data to find patterns and insights" },
      { id: "C", text: "Meeting new people and building relationships" },
    ],
  },
  {
    id: "int2",
    question: "If you had to choose one skill to develop further, which would it be?",
    options: [
      { id: "A", text: "Technical skills like coding or engineering" },
      { id: "B", text: "Communication and presentation skills" },
      { id: "C", text: "Strategic planning and analysis" },
    ],
  },
  {
    id: "int3",
    question: "Which subject would you be most interested in studying?",
    options: [
      { id: "A", text: "Technology and innovation" },
      { id: "B", text: "Business and entrepreneurship" },
      { id: "C", text: "Psychology and human behavior" },
    ],
  },
  {
    id: "int4",
    question: "In a team project, which role would you naturally gravitate toward?",
    options: [
      { id: "A", text: "The strategist who plans the approach" },
      { id: "B", text: "The communicator who coordinates the team" },
      { id: "C", text: "The specialist who handles technical aspects" },
    ],
  },
  {
    id: "int5",
    question: "Which type of problem do you find most satisfying to solve?",
    options: [
      { id: "A", text: "Technical problems with specific solutions" },
      { id: "B", text: "Creative problems requiring innovative thinking" },
      { id: "C", text: "People-oriented problems involving relationships" },
    ],
  },
  {
    id: "int6",
    question: "When browsing articles online, you're most drawn to:",
    options: [
      { id: "A", text: "Technology and innovation news" },
      { id: "B", text: "Business and market trends" },
      { id: "C", text: "Psychology and human interest stories" },
    ],
  },
  {
    id: "int7",
    question: "Which of these skills comes most naturally to you?",
    options: [
      { id: "A", text: "Analyzing complex information" },
      { id: "B", text: "Building relationships with different types of people" },
      { id: "C", text: "Creating and designing new solutions" },
    ],
  },
  {
    id: "int8",
    question: "What aspect of a project gives you the most satisfaction?",
    options: [
      { id: "A", text: "Successfully solving complex problems" },
      { id: "B", text: "Seeing real-world impact from your work" },
      { id: "C", text: "Collaborating with others to achieve a goal" },
    ],
  },
  {
    id: "int9",
    question: "Which of these tools would you be most excited to master?",
    options: [
      { id: "A", text: "Data analysis and visualization software" },
      { id: "B", text: "Customer relationship management systems" },
      { id: "C", text: "Design and creative software" },
    ],
  },
  {
    id: "int10",
    question: "When starting a new project, you're most concerned with:",
    options: [
      { id: "A", text: "Understanding the technical requirements in detail" },
      { id: "B", text: "Identifying the strategic business goals" },
      { id: "C", text: "Building the right team and relationships" },
    ],
  },
];

const AssessmentInterests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const assessmentContext = useContext(AssessmentContext);
  
  if (!assessmentContext) {
    return <div>Loading assessment...</div>;
  }
  
  const { interests, setAnswers, setCurrentSection } = assessmentContext;
  
  // Set current section on component mount
  setCurrentSection("interests");
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers("interests", questionId, answer);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Move to next section
      navigate("/assessment/values");
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // Go back to previous section
      navigate("/assessment/work-style");
    }
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2" style={{color: "hsl(var(--interests))"}}>
          Core Interests & Skills
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Section 2 of 3: Explore your natural interests and the skills you enjoy using.
        </p>
        
        <div className="mb-8">
          <Progress value={progress} className="h-2" style={{backgroundColor: "hsl(var(--interests) / 0.2)"}} />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Section 2/3</span>
          </div>
        </div>
        
        <Card className="p-6">
          <QuestionLayout
            question={questions[currentQuestion]}
            selectedAnswer={interests[questions[currentQuestion].id]}
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
              disabled={!interests[questions[currentQuestion].id]}
              style={{backgroundColor: "hsl(var(--interests))"}}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Continue to Values"}
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

export default AssessmentInterests;
