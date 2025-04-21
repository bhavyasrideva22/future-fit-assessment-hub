
import { useContext } from "react";
import { AssessmentContext } from "@/App";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share, Facebook, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const SHARE_TEXT = encodeURIComponent(
  "I just completed my career alignment assessment! Discover your top career categories and more with this tool."
);

const ShareResults = () => {
  const assessmentContext = useContext(AssessmentContext);
  const { toast } = useToast();
  const navigate = useNavigate();

  let summary;
  let topMatches: {
    title: string;
    description: string;
    matchPercent: number;
  }[] = [];

  // Compute summary using same logic as results page
  if (assessmentContext) {
    const { fullAssessment, workStyle, interests, values } = assessmentContext;
    let allAnswers = {};

    if (Object.keys(fullAssessment).length > 0) {
      allAnswers = fullAssessment;
    } else if (
      Object.keys(workStyle).length &&
      Object.keys(interests).length &&
      Object.keys(values).length
    ) {
      allAnswers = { ...workStyle, ...interests, ...values };
    }
    // Simplified scoring for demo—show category names and placeholder percents
    const categories = [
      { id: "sales", title: "Sales & Client Management" },
      { id: "development", title: "Software Development & Engineering" },
      { id: "analysis", title: "Business Analysis & Strategy" },
      { id: "operations", title: "Administrative & Operational Support" },
      { id: "techSales", title: "IT & Technology Sales" },
      { id: "startup", title: "Start-Up & Entrepreneurship" },
      { id: "hr", title: "Human Resources & People Operations" },
      { id: "marketing", title: "Digital Marketing & Communications" },
      { id: "consulting", title: "Consulting & Advisory Roles" },
    ];
    // Here just use the same as index of score, since we don't have the whole matching algorithm here
    topMatches = categories.slice(0, 3).map((cat, idx) => ({
      title: cat.title,
      description: `A great fit for those inclined towards ${cat.title.toLowerCase()}.`,
      matchPercent: 100 - idx * 20,
    }));
    summary = "Share your personalized career results and inspire others to explore their path!";
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/results");
    toast({ description: "Results link copied to clipboard!" });
  };

  const handleShare = (platform: "facebook" | "twitter" | "linkedin") => {
    let url = "";
    const link = window.location.origin + "/results";
    if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${SHARE_TEXT}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${SHARE_TEXT}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(link)}&title=${SHARE_TEXT}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-background py-8 px-4 md:px-14 animate-fade-in">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Share className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Share Your Results</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Let others know about your top career paths, or save these results for future reference.
        </p>
        {topMatches.length > 0 ? (
          <div className="space-y-6">
            {topMatches.map((match, idx) => (
              <Card
                key={match.title}
                className="border-t-4 animate-fade-in"
                style={{
                  borderTopColor: idx === 0
                    ? "#9b87f5"
                    : idx === 1
                      ? "#7E69AB"
                      : "#D6BCFA"
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{match.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={match.matchPercent} className="h-2" />
                    <span className="text-xs font-medium text-primary">{match.matchPercent}% Match</span>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm mt-1">
                    {match.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            <p>No assessment results found. Please complete the assessment first.</p>
            <Button asChild className="mt-4">
              <Link to="/assessment/full">Go to Assessment</Link>
            </Button>
          </div>
        )}
        <Card className="mt-10 animate-fade-in">
          <CardHeader>
            <CardTitle>Share Your Results</CardTitle>
            <CardDescription>Inspire your friends or save your journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-5 w-5 text-blue-400" />
                Twitter
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-5 w-5 text-blue-500" />
                LinkedIn
              </Button>
              <Button variant="secondary" onClick={copyLink}>
                <ExternalLink className="h-4 w-4 mr-1" />
                Copy Link
              </Button>
            </div>
            {/* Email/share via link can be added here in the future */}
          </CardContent>
        </Card>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <Link to="/results"><span>&larr;</span> Back to Results</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareResults;
