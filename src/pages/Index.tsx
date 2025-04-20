
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b py-4">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl">Career Alignment Assessment</div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground">Home</Link>
            <Link to="/assessment/full" className="text-foreground/80 hover:text-foreground">Assessment</Link>
            <a href="#about" className="text-foreground/80 hover:text-foreground">About</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-background to-muted py-20 md:py-32">
          <div className="container text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Ideal Career Path</h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Take our comprehensive assessment to discover career paths that align with your work style, interests, and values.
            </p>
            <Button size="lg" asChild>
              <Link to="/assessment/full">Start the Assessment</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Complete the Assessment</h3>
                <p className="text-muted-foreground">
                  Answer 50 questions about your work preferences, interests, and values.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Get Your Results</h3>
                <p className="text-muted-foreground">
                  Receive personalized career recommendations based on your responses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Explore Opportunities</h3>
                <p className="text-muted-foreground">
                  Learn about roles, required skills, and resources to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">How long does the assessment take?</h3>
                <p className="text-muted-foreground">
                  The assessment takes approximately 15-20 minutes to complete. It consists of 50 multiple-choice questions.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">Is my data kept confidential?</h3>
                <p className="text-muted-foreground">
                  Yes, all your responses are kept confidential. We only use aggregated, anonymized data for research purposes.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">How accurate are the results?</h3>
                <p className="text-muted-foreground">
                  The assessment provides guidance based on your responses, but career decisions should consider multiple factors including education, experience, and market opportunities.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-2">Can I retake the assessment?</h3>
                <p className="text-muted-foreground">
                  Yes, you can retake the assessment as many times as you like. Your most recent results will be shown.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-10">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Career Alignment Assessment Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
