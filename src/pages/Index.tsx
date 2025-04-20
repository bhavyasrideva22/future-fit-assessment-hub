
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Your Ideal Career Path
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in">
            Find the right career direction by assessing your work style, interests, and values.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 animate-fade-in"
          >
            <Link to="/assessment/work-style">
              Start the Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-[60%] right-[15%] w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-[80%] left-[20%] w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mx-auto mb-4 text-primary text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Take the Assessment</h3>
              <p className="text-muted-foreground">
                Answer questions about your work style, interests, and values.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/10 mx-auto mb-4 text-secondary text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Analyzed</h3>
              <p className="text-muted-foreground">
                Our algorithm analyzes your responses to identify your strengths and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[hsl(var(--values)_/_0.1)] mx-auto mb-4 text-[hsl(var(--values))] text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Recommendations</h3>
              <p className="text-muted-foreground">
                Review personalized career path recommendations based on your unique profile.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/assessment/work-style">
                Start Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Career Categories Section */}
      <div className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Career Categories</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our assessment helps match you with careers across these diverse domains based on your unique profile.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales & Client Management</CardTitle>
                <CardDescription>
                  Roles focused on building relationships and driving business growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Account Manager</li>
                  <li>Business Development</li>
                  <li>Client Success Manager</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Software Development</CardTitle>
                <CardDescription>
                  Roles centered on building software and technical systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Software Engineer</li>
                  <li>Full-Stack Developer</li>
                  <li>DevOps Engineer</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Business Analysis</CardTitle>
                <CardDescription>
                  Roles analyzing data and processes for better decision-making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Business Analyst</li>
                  <li>Strategy Consultant</li>
                  <li>Product Manager</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Administrative Support</CardTitle>
                <CardDescription>
                  Roles maintaining efficient operations and organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Operations Manager</li>
                  <li>Executive Assistant</li>
                  <li>Project Coordinator</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Marketing & Communications</CardTitle>
                <CardDescription>
                  Roles promoting products and brands across channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Digital Marketing Manager</li>
                  <li>Content Strategist</li>
                  <li>SEO Specialist</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>HR & People Operations</CardTitle>
                <CardDescription>
                  Roles supporting talent and organizational culture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>HR Manager</li>
                  <li>Talent Acquisition</li>
                  <li>Learning & Development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/assessment/work-style">
                Find Your Career Match <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Student Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 italic text-muted-foreground">
                  "The career assessment tool helped me discover that my analytical skills and problem-solving approach were perfect for business analysis. I'm now interning at a consulting firm and loving it!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Jamie D.</p>
                    <p className="text-sm text-muted-foreground">Business Analytics Major</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 italic text-muted-foreground">
                  "I was surprised when the assessment suggested tech sales as a career path. It recognized my technical knowledge and people skills could work together. Now I'm in a role I never would have considered!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    MK
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Michael K.</p>
                    <p className="text-sm text-muted-foreground">Computer Science Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Career Path?</h2>
          <p className="text-xl mb-8">
            Take the first step toward aligning your career with your natural strengths and preferences.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            <Link to="/assessment/work-style">
              Start the Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-muted/40 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Career Alignment Assessment Tool</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Helping students find their best-fit career paths.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/assessment/work-style" className="text-sm text-muted-foreground hover:text-foreground">
                Start Assessment
              </Link>
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground">
                Admin Dashboard
              </Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
