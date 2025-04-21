import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentContext } from "@/App";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp, Share, Download, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const careerCategories = [
  {
    id: "sales",
    title: "Sales & Client Management",
    description: "Careers focused on building relationships, understanding client needs, and driving business through sales and account management.",
    typicalRoles: ["Account Manager", "Sales Representative", "Business Development Manager", "Client Success Manager"],
    coreTraits: ["Relationship-building", "Communication", "Persuasion", "Goal-oriented"],
    skillsToDevelop: ["Negotiation techniques", "Industry knowledge", "CRM systems", "Strategic planning"],
  },
  {
    id: "development",
    title: "Software Development & Engineering",
    description: "Careers centered on building and maintaining software systems, applications, and technical infrastructure.",
    typicalRoles: ["Software Engineer", "Full-Stack Developer", "DevOps Engineer", "Mobile Developer"],
    coreTraits: ["Analytical thinking", "Problem-solving", "Attention to detail", "Continuous learning"],
    skillsToDevelop: ["Emerging technologies", "System architecture", "Collaboration tools", "Project management"],
  },
  {
    id: "analysis",
    title: "Business Analysis & Strategy",
    description: "Careers that involve analyzing business processes, market trends, and data to inform strategic decision-making.",
    typicalRoles: ["Business Analyst", "Strategy Consultant", "Market Researcher", "Product Manager"],
    coreTraits: ["Critical thinking", "Data interpretation", "Strategic perspective", "Communication"],
    skillsToDevelop: ["Data visualization", "Industry-specific knowledge", "Project management", "Executive communication"],
  },
  {
    id: "operations",
    title: "Administrative & Operational Support",
    description: "Careers that keep organizations running smoothly through administrative coordination, process management, and operational support.",
    typicalRoles: ["Operations Manager", "Executive Assistant", "Office Manager", "Project Coordinator"],
    coreTraits: ["Organization", "Attention to detail", "Efficiency", "Communication"],
    skillsToDevelop: ["Process improvement", "Team coordination", "Software tools", "Resource management"],
  },
  {
    id: "techSales",
    title: "IT & Technology Sales",
    description: "Specialized sales roles that bridge technical knowledge with sales skills to market technology products and services.",
    typicalRoles: ["Solutions Engineer", "Technical Account Manager", "Technology Sales Representative", "Pre-Sales Consultant"],
    coreTraits: ["Technical aptitude", "Communication", "Problem-solving", "Relationship building"],
    skillsToDevelop: ["Industry certifications", "Technical demonstrations", "Consultative selling", "Competitive analysis"],
  },
  {
    id: "startup",
    title: "Start-Up & Entrepreneurship",
    description: "Careers focused on building new ventures, developing innovative solutions, and growing businesses from the ground up.",
    typicalRoles: ["Founder", "Co-founder", "Start-up Employee", "Business Owner"],
    coreTraits: ["Risk tolerance", "Adaptability", "Vision", "Self-motivation"],
    skillsToDevelop: ["Financial planning", "Pitching", "MVP development", "Market validation"],
  },
  {
    id: "hr",
    title: "Human Resources & People Operations",
    description: "Careers dedicated to managing talent, developing culture, and supporting employee growth and engagement.",
    typicalRoles: ["HR Manager", "Talent Acquisition Specialist", "Learning & Development Manager", "Employee Experience Designer"],
    coreTraits: ["Empathy", "Communication", "Organization", "Fairness"],
    skillsToDevelop: ["HR technology", "Employment law", "Talent development", "Conflict resolution"],
  },
  {
    id: "marketing",
    title: "Digital Marketing & Communications",
    description: "Careers focused on promoting products, services, and brands through digital channels and strategic communication.",
    typicalRoles: ["Digital Marketing Manager", "Content Strategist", "Social Media Manager", "SEO Specialist"],
    coreTraits: ["Creativity", "Strategic thinking", "Data analysis", "Communication"],
    skillsToDevelop: ["Analytics platforms", "Content creation", "Audience targeting", "Marketing automation"],
  },
  {
    id: "consulting",
    title: "Consulting & Advisory Roles",
    description: "Careers providing expert advice, specialized knowledge, and strategic guidance to organizations.",
    typicalRoles: ["Management Consultant", "Financial Advisor", "Technology Consultant", "Strategy Consultant"],
    coreTraits: ["Problem-solving", "Communication", "Adaptability", "Critical thinking"],
    skillsToDevelop: ["Presentation skills", "Industry expertise", "Project management", "Client relationship management"],
  },
];

const calculateCareerMatches = (answers: Record<string, string>) => {
  const scores: Record<string, number> = {
    sales: 0,
    development: 0,
    analysis: 0,
    operations: 0,
    techSales: 0,
    startup: 0,
    hr: 0,
    marketing: 0,
    consulting: 0,
  };
  
  Object.entries(answers).forEach(([questionId, answer]) => {
    if (questionId === "q1") {
      if (answer === "A") scores.analysis += 2;
      if (answer === "B") scores.consulting += 2;
      if (answer === "C") scores.sales += 2;
    }
    if (questionId === "q2") {
      if (answer === "A") scores.operations += 2;
      if (answer === "B") scores.startup += 2;
      if (answer === "C") scores.consulting += 2;
    }
    if (questionId === "q3") {
      if (answer === "A") scores.sales += 2;
      if (answer === "B") scores.consulting += 2;
      if (answer === "C") scores.hr += 2;
    }
    if (questionId === "q4") {
      if (answer === "A") scores.operations += 2; 
      if (answer === "B") scores.startup += 2;
      if (answer === "C") scores.consulting += 2;
    }
    if (questionId === "q5") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.startup += 2;
      if (answer === "C") scores.hr += 2;
    }
    if (questionId === "q6") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.sales += 2;
      if (answer === "C") scores.consulting += 2;
    }
    if (questionId === "q7") {
      if (answer === "A") scores.operations += 2;
      if (answer === "B") scores.analysis += 2;
      if (answer === "C") scores.hr += 2;
    }
    if (questionId === "q8") {
      if (answer === "A") scores.analysis += 2;
      if (answer === "B") scores.sales += 2;
      if (answer === "C") scores.consulting += 2;
    }
    if (questionId === "q9") {
      if (answer === "A") scores.operations += 2;
      if (answer === "B") scores.consulting += 2;
      if (answer === "C") scores.startup += 2;
    }
    if (questionId === "q10") {
      if (answer === "A") scores.analysis += 2;
      if (answer === "B") scores.marketing += 2;
      if (answer === "C") scores.hr += 2;
    }
    
    if (questionId === "q11") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.analysis += 2;
      if (answer === "C") scores.sales += 2;
    }
    if (questionId === "q12") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.marketing += 2;
      if (answer === "C") scores.consulting += 2;
    }
    if (questionId === "q13") {
      if (answer === "A") scores.techSales += 2;
      if (answer === "B") scores.startup += 2;
      if (answer === "C") scores.hr += 2;
    }
    if (questionId === "q14") {
      if (answer === "A") scores.consulting += 2;
      if (answer === "B") scores.marketing += 2;
      if (answer === "C") scores.development += 2;
    }
    if (questionId === "q15") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.marketing += 2;
      if (answer === "C") scores.hr += 2;
    }
    
    if (questionId === "q31") {
      if (answer === "A") scores.hr += 2;
      if (answer === "B") scores.consulting += 2;
      if (answer === "C") scores.operations += 2;
    }
    if (questionId === "q32") {
      if (answer === "A") scores.sales += 2;
      if (answer === "B") scores.development += 2;
      if (answer === "C") scores.operations += 2;
    }
    if (questionId === "q33") {
      if (answer === "A") scores.development += 2;
      if (answer === "B") scores.operations += 2;
      if (answer === "C") scores.hr += 2;
    }
  });
  
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id]) => careerCategories.find(category => category.id === id)!);
};

const Results = () => {
  const [topMatches, setTopMatches] = useState<typeof careerCategories>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showAllRoles, setShowAllRoles] = useState<Record<string, boolean>>({});
  const assessmentContext = useContext(AssessmentContext);
  const { toast } = useToast();

  useEffect(() => {
    if (assessmentContext) {
      const { workStyle, interests, values, fullAssessment, currentSection } = assessmentContext;
      
      if (Object.keys(fullAssessment).length > 0) {
        const matches = calculateCareerMatches(fullAssessment);
        setTopMatches(matches);
      }
      else if (
        Object.keys(workStyle).length && 
        Object.keys(interests).length && 
        Object.keys(values).length
      ) {
        const allAnswers = {
          ...workStyle,
          ...interests,
          ...values
        };
        const matches = calculateCareerMatches(allAnswers);
        setTopMatches(matches);
      }
    }
  }, [assessmentContext]);

  if (!assessmentContext) {
    return <div>Loading results...</div>;
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My Career Assessment Results',
        text: `I just completed my career assessment and found my top matches! My top career path is ${topMatches[0]?.title}.`,
        url: window.location.href,
      });
    } catch (err) {
      toast({
        description: "Unable to share directly. You can copy the URL manually!",
      });
    }
  };

  const getMatchScore = (index: number) => {
    return 100 - (index * 20);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Your Career Alignment Results</h1>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Based on your work style preferences, interests, and values, we've identified these career categories as your top matches.
        </p>
        
        {topMatches.length > 0 ? (
          <div className="space-y-8">
            {topMatches.map((category, index) => (
              <Collapsible
                key={category.id}
                open={expandedCard === category.id}
                onOpenChange={() => setExpandedCard(expandedCard === category.id ? null : category.id)}
              >
                <Card className="border-t-4 transition-all duration-300 hover:shadow-lg" 
                  style={{ borderTopColor: index === 0 ? "hsl(var(--primary))" : 
                    index === 1 ? "hsl(var(--secondary))" : "hsl(var(--values))" }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl flex items-center">
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full mr-3 text-white text-sm"
                          style={{ backgroundColor: index === 0 ? "hsl(var(--primary))" : 
                            index === 1 ? "hsl(var(--secondary))" : "hsl(var(--values))" }}>
                          {index + 1}
                        </span>
                        {category.title}
                      </CardTitle>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon">
                          {expandedCard === category.id ? 
                            <ArrowUp className="h-4 w-4" /> : 
                            <ArrowDown className="h-4 w-4" />}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={getMatchScore(index)} className="h-2" />
                      <span className="text-sm font-medium">{getMatchScore(index)}% Match</span>
                    </div>
                    <CardDescription className="text-base mt-2">{category.description}</CardDescription>
                  </CardHeader>
                  <CollapsibleContent>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">Typical Roles</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {category.typicalRoles.slice(0, showAllRoles[category.id] ? undefined : 2).map((role) => (
                              <li key={role} className="mb-1">{role}</li>
                            ))}
                          </ul>
                          {category.typicalRoles.length > 2 && (
                            <Button 
                              variant="link" 
                              onClick={() => setShowAllRoles(prev => ({ ...prev, [category.id]: !prev[category.id] }))}
                              className="mt-2 p-0 h-auto"
                            >
                              {showAllRoles[category.id] ? 'Show less' : 'Show more'}
                            </Button>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Core Traits</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {category.coreTraits.map((trait) => (
                              <li key={trait} className="mb-1">{trait}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Skills to Develop</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {category.skillsToDevelop.map((skill) => (
                              <li key={skill} className="mb-1">{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowDown className="mr-2 h-4 w-4 rotate-90" />
                  Return Home
                </Link>
              </Button>
              <Button variant="secondary" onClick={() => toast({ description: "Download feature coming soon!" })}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF Report
              </Button>
              <Button asChild>
                <Link to="/share-results">
                  <Share className="mr-2 h-4 w-4" />
                  Share Results
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/explore-resources">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Resources
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">
              It looks like you haven't completed the assessment yet.
            </p>
            <Button asChild>
              <Link to="/assessment/full">Start the Assessment</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
