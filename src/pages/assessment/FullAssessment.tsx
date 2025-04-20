
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentContext } from "@/App";
import QuestionLayout from "@/components/assessment/QuestionLayout";

// Comprehensive assessment questions - all 50 questions in one section
const questions = [
  // Work Style questions (1-10)
  {
    id: "q1",
    question: "How do you prefer to approach problems?",
    options: [
      { id: "A", text: "Analyze all available information before deciding" },
      { id: "B", text: "Brainstorm creative solutions with a team" },
      { id: "C", text: "Trust my gut instinct and make quick decisions" },
    ],
  },
  {
    id: "q2",
    question: "When working on projects, you prefer to:",
    options: [
      { id: "A", text: "Have a detailed plan with clear milestones" },
      { id: "B", text: "Adapt as you go, making adjustments as needed" },
      { id: "C", text: "Focus on the big picture and delegate details to others" },
    ],
  },
  {
    id: "q3",
    question: "In a team setting, you typically:",
    options: [
      { id: "A", text: "Take charge and provide direction" },
      { id: "B", text: "Collaborate and seek consensus" },
      { id: "C", text: "Support others and help implement their ideas" },
    ],
  },
  {
    id: "q4",
    question: "How do you handle tight deadlines?",
    options: [
      { id: "A", text: "Plan ahead to avoid last-minute pressure" },
      { id: "B", text: "Get energized by the pressure and rise to the challenge" },
      { id: "C", text: "Prioritize tasks and focus on what's most important" },
    ],
  },
  {
    id: "q5",
    question: "When learning something new, you prefer to:",
    options: [
      { id: "A", text: "Read detailed instructions or watch tutorials" },
      { id: "B", text: "Jump in and learn through trial and error" },
      { id: "C", text: "Have someone walk you through it step by step" },
    ],
  },
  {
    id: "q6",
    question: "Your ideal work environment is:",
    options: [
      { id: "A", text: "Quiet and focused, with minimal distractions" },
      { id: "B", text: "Collaborative and energetic, with lots of interaction" },
      { id: "C", text: "Flexible and varied, with changing tasks and settings" },
    ],
  },
  {
    id: "q7",
    question: "When receiving feedback, you prefer it to be:",
    options: [
      { id: "A", text: "Direct and specific, focusing on areas to improve" },
      { id: "B", text: "Balanced, highlighting both strengths and weaknesses" },
      { id: "C", text: "Constructive and supportive, with clear guidance" },
    ],
  },
  {
    id: "q8",
    question: "When facing a challenge, you typically:",
    options: [
      { id: "A", text: "Research different approaches before taking action" },
      { id: "B", text: "Tackle it head-on with determination" },
      { id: "C", text: "Seek advice or collaboration from others" },
    ],
  },
  {
    id: "q9",
    question: "Your approach to organization is:",
    options: [
      { id: "A", text: "Highly structured with detailed systems" },
      { id: "B", text: "Somewhat organized with flexibility" },
      { id: "C", text: "More spontaneous, organizing as needed" },
    ],
  },
  {
    id: "q10",
    question: "When communicating ideas, you prefer to:",
    options: [
      { id: "A", text: "Present detailed, well-researched information" },
      { id: "B", text: "Focus on the big picture and inspire others" },
      { id: "C", text: "Use examples and stories to illustrate points" },
    ],
  },
  // Interests questions (11-30)
  {
    id: "q11",
    question: "Which of these activities would you most enjoy?",
    options: [
      { id: "A", text: "Designing and building something with your hands" },
      { id: "B", text: "Analyzing data to find patterns and insights" },
      { id: "C", text: "Meeting new people and building relationships" },
    ],
  },
  {
    id: "q12",
    question: "If you had to choose one skill to develop further, which would it be?",
    options: [
      { id: "A", text: "Technical skills like coding or engineering" },
      { id: "B", text: "Communication and presentation skills" },
      { id: "C", text: "Strategic planning and analysis" },
    ],
  },
  {
    id: "q13",
    question: "Which subject would you be most interested in studying?",
    options: [
      { id: "A", text: "Technology and innovation" },
      { id: "B", text: "Business and entrepreneurship" },
      { id: "C", text: "Psychology and human behavior" },
    ],
  },
  {
    id: "q14",
    question: "In a team project, which role would you naturally gravitate toward?",
    options: [
      { id: "A", text: "The strategist who plans the approach" },
      { id: "B", text: "The communicator who coordinates the team" },
      { id: "C", text: "The specialist who handles technical aspects" },
    ],
  },
  {
    id: "q15",
    question: "Which type of problem do you find most satisfying to solve?",
    options: [
      { id: "A", text: "Technical problems with specific solutions" },
      { id: "B", text: "Creative problems requiring innovative thinking" },
      { id: "C", text: "People-oriented problems involving relationships" },
    ],
  },
  {
    id: "q16",
    question: "When browsing articles online, you're most drawn to:",
    options: [
      { id: "A", text: "Technology and innovation news" },
      { id: "B", text: "Business and market trends" },
      { id: "C", text: "Psychology and human interest stories" },
    ],
  },
  {
    id: "q17",
    question: "Which of these skills comes most naturally to you?",
    options: [
      { id: "A", text: "Analyzing complex information" },
      { id: "B", text: "Building relationships with different types of people" },
      { id: "C", text: "Creating and designing new solutions" },
    ],
  },
  {
    id: "q18",
    question: "What aspect of a project gives you the most satisfaction?",
    options: [
      { id: "A", text: "Successfully solving complex problems" },
      { id: "B", text: "Seeing real-world impact from your work" },
      { id: "C", text: "Collaborating with others to achieve a goal" },
    ],
  },
  {
    id: "q19",
    question: "Which of these tools would you be most excited to master?",
    options: [
      { id: "A", text: "Data analysis and visualization software" },
      { id: "B", text: "Customer relationship management systems" },
      { id: "C", text: "Design and creative software" },
    ],
  },
  {
    id: "q20",
    question: "When starting a new project, you're most concerned with:",
    options: [
      { id: "A", text: "Understanding the technical requirements in detail" },
      { id: "B", text: "Identifying the strategic business goals" },
      { id: "C", text: "Building the right team and relationships" },
    ],
  },
  {
    id: "q21",
    question: "Which professional field do you find most intriguing?",
    options: [
      { id: "A", text: "Science, engineering, or technology" },
      { id: "B", text: "Arts, media, or design" },
      { id: "C", text: "Business, finance, or entrepreneurship" },
    ],
  },
  {
    id: "q22",
    question: "What type of work environment would you thrive in?",
    options: [
      { id: "A", text: "Fast-paced startup with diverse responsibilities" },
      { id: "B", text: "Established company with clear structures" },
      { id: "C", text: "Creative agency or innovation-focused team" },
    ],
  },
  {
    id: "q23",
    question: "How do you approach learning new software or tools?",
    options: [
      { id: "A", text: "Dive deep into documentation and tutorials" },
      { id: "B", text: "Learn just enough to get started, then figure it out as you go" },
      { id: "C", text: "Find a mentor or expert who can guide you" },
    ],
  },
  {
    id: "q24",
    question: "Which task would you most enjoy in a team project?",
    options: [
      { id: "A", text: "Conducting research and analyzing data" },
      { id: "B", text: "Creating presentations and communicating results" },
      { id: "C", text: "Coordinating team members and managing timelines" },
    ],
  },
  {
    id: "q25",
    question: "What type of professional development interests you most?",
    options: [
      { id: "A", text: "Technical certifications and specialized skills" },
      { id: "B", text: "Leadership and management training" },
      { id: "C", text: "Creative thinking and innovation workshops" },
    ],
  },
  {
    id: "q26",
    question: "How important is having a clear career path to you?",
    options: [
      { id: "A", text: "Very important - I want to know exactly where I'm heading" },
      { id: "B", text: "Somewhat important - I value direction but also flexibility" },
      { id: "C", text: "Less important - I prefer to explore opportunities as they arise" },
    ],
  },
  {
    id: "q27",
    question: "What aspects of technology do you find most interesting?",
    options: [
      { id: "A", text: "Programming and building digital solutions" },
      { id: "B", text: "Using technology to solve business problems" },
      { id: "C", text: "How technology impacts people and society" },
    ],
  },
  {
    id: "q28",
    question: "When working with data, you prefer to:",
    options: [
      { id: "A", text: "Analyze deeply to find patterns and insights" },
      { id: "B", text: "Create visualizations to communicate findings" },
      { id: "C", text: "Use data to inform strategic decisions" },
    ],
  },
  {
    id: "q29",
    question: "Which industry would you most like to work in?",
    options: [
      { id: "A", text: "Technology and software development" },
      { id: "B", text: "Media, marketing, and communications" },
      { id: "C", text: "Finance, consulting, or business services" },
    ],
  },
  {
    id: "q30",
    question: "How do you prefer to showcase your accomplishments?",
    options: [
      { id: "A", text: "Through measurable results and portfolio work" },
      { id: "B", text: "Through recommendations and testimonials" },
      { id: "C", text: "Through leadership roles and responsibilities" },
    ],
  },
  // Values questions (31-50)
  {
    id: "q31",
    question: "Which of these is most important to you in a job?",
    options: [
      { id: "A", text: "Making a positive impact on society" },
      { id: "B", text: "Opportunities for growth and advancement" },
      { id: "C", text: "Work-life balance and stability" },
    ],
  },
  {
    id: "q32",
    question: "What motivates you most in your work?",
    options: [
      { id: "A", text: "Recognition and respect from others" },
      { id: "B", text: "Personal accomplishment and growth" },
      { id: "C", text: "Financial rewards and security" },
    ],
  },
  {
    id: "q33",
    question: "Which workplace value is most important to you?",
    options: [
      { id: "A", text: "Innovation and creativity" },
      { id: "B", text: "Structure and predictability" },
      { id: "C", text: "Collaboration and teamwork" },
    ],
  },
  {
    id: "q34",
    question: "In an ideal job, how important is having autonomy?",
    options: [
      { id: "A", text: "Very important - I prefer to work independently" },
      { id: "B", text: "Somewhat important - Balance is key" },
      { id: "C", text: "Less important - I value clear direction" },
    ],
  },
  {
    id: "q35",
    question: "How do you feel about taking risks in your career?",
    options: [
      { id: "A", text: "I embrace risk as a path to greater rewards" },
      { id: "B", text: "I take calculated risks when the potential benefit is clear" },
      { id: "C", text: "I prefer stability and security over risk-taking" },
    ],
  },
  {
    id: "q36",
    question: "How important is it that your work aligns with your personal values?",
    options: [
      { id: "A", text: "Essential - I must believe in what I'm doing" },
      { id: "B", text: "Important, but I can compromise for the right opportunity" },
      { id: "C", text: "Nice to have, but not a primary concern" },
    ],
  },
  {
    id: "q37",
    question: "Which best describes your ideal company culture?",
    options: [
      { id: "A", text: "Fast-paced and innovative, embracing change" },
      { id: "B", text: "Collaborative and supportive, valuing relationships" },
      { id: "C", text: "Structured and stable, with clear processes" },
    ],
  },
  {
    id: "q38",
    question: "How important is it to you to see the impact of your work?",
    options: [
      { id: "A", text: "Very important - I need to see tangible results" },
      { id: "B", text: "Important - I want to know my work matters" },
      { id: "C", text: "Less important - Doing my job well is enough" },
    ],
  },
  {
    id: "q39",
    question: "Which would be most fulfilling to you in a career?",
    options: [
      { id: "A", text: "Creating innovative solutions to complex problems" },
      { id: "B", text: "Helping others and making a difference in their lives" },
      { id: "C", text: "Building something successful and lasting" },
    ],
  },
  {
    id: "q40",
    question: "How important is continuous learning in your career?",
    options: [
      { id: "A", text: "Essential - I want to constantly develop new skills" },
      { id: "B", text: "Important - I enjoy learning, but also applying what I know" },
      { id: "C", text: "Less important - I prefer to master specific skills" },
    ],
  },
  {
    id: "q41",
    question: "What type of recognition do you value most?",
    options: [
      { id: "A", text: "Public acknowledgment of achievements" },
      { id: "B", text: "Increased responsibility and trust" },
      { id: "C", text: "Financial rewards and bonuses" },
    ],
  },
  {
    id: "q42",
    question: "How important is salary compared to other job factors?",
    options: [
      { id: "A", text: "Very important - It's a primary consideration" },
      { id: "B", text: "Important, but I'd trade some salary for the right environment" },
      { id: "C", text: "Less important than finding meaningful work" },
    ],
  },
  {
    id: "q43",
    question: "Which work schedule would you prefer?",
    options: [
      { id: "A", text: "Standard hours with clear separation between work and personal life" },
      { id: "B", text: "Flexible hours that I can adjust as needed" },
      { id: "C", text: "Project-based work with intense periods and downtime between" },
    ],
  },
  {
    id: "q44",
    question: "How do you feel about business travel?",
    options: [
      { id: "A", text: "I enjoy travel and the opportunity to see new places" },
      { id: "B", text: "Occasional travel is fine, but not too frequent" },
      { id: "C", text: "I prefer minimal travel and stability in location" },
    ],
  },
  {
    id: "q45",
    question: "What's your attitude toward workplace competition?",
    options: [
      { id: "A", text: "I thrive in competitive environments" },
      { id: "B", text: "Some healthy competition can be motivating" },
      { id: "C", text: "I prefer collaborative over competitive cultures" },
    ],
  },
  {
    id: "q46",
    question: "How important is mentorship in your career development?",
    options: [
      { id: "A", text: "Very important - I seek mentors actively" },
      { id: "B", text: "Somewhat important - It's helpful but not essential" },
      { id: "C", text: "I prefer to be self-directed in my development" },
    ],
  },
  {
    id: "q47",
    question: "What role does creativity play in your ideal job?",
    options: [
      { id: "A", text: "Central - I want to use creativity daily" },
      { id: "B", text: "Important in specific contexts, but not always" },
      { id: "C", text: "Less important than analytical or practical skills" },
    ],
  },
  {
    id: "q48",
    question: "How do you feel about remote work?",
    options: [
      { id: "A", text: "I prefer working remotely full-time" },
      { id: "B", text: "I enjoy a hybrid approach with flexibility" },
      { id: "C", text: "I prefer working in an office with colleagues" },
    ],
  },
  {
    id: "q49",
    question: "What role would you like technology to play in your job?",
    options: [
      { id: "A", text: "Central - I want to work directly with technology" },
      { id: "B", text: "Important as a tool, but not the main focus" },
      { id: "C", text: "Minimal - I prefer work that's less technology-dependent" },
    ],
  },
  {
    id: "q50",
    question: "What's your preferred pace of work?",
    options: [
      { id: "A", text: "Fast-paced with multiple projects simultaneously" },
      { id: "B", text: "Moderate pace with occasional busy periods" },
      { id: "C", text: "Measured and thoughtful, focusing deeply on one thing at a time" },
    ],
  },
];

const FullAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const assessmentContext = useContext(AssessmentContext);
  
  if (!assessmentContext) {
    return <div>Loading assessment...</div>;
  }
  
  const { fullAssessment, setAnswers, setCurrentSection } = assessmentContext;
  
  // Set current section on component mount
  setCurrentSection("fullAssessment");
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers("fullAssessment", questionId, answer);
    
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
    }
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Career Assessment</h1>
        <p className="text-center text-muted-foreground mb-6">
          Complete this 50-question assessment to discover your ideal career path.
        </p>
        
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>
              {currentQuestion < 10 ? "Work Style & Preferences" : 
               currentQuestion < 30 ? "Core Interests & Skills" : 
               "Values & Motivation"}
            </span>
          </div>
        </div>
        
        <Card className="p-6">
          <QuestionLayout
            question={questions[currentQuestion]}
            selectedAnswer={fullAssessment[questions[currentQuestion].id]}
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
              disabled={!fullAssessment[questions[currentQuestion].id]}
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

export default FullAssessment;
