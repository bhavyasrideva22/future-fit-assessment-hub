
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const resourceSections = [
  {
    title: "Career Planning Guides",
    resources: [
      {
        name: "O*NET Career Exploration Tools",
        description: "Comprehensive information about occupations and required skills.",
        url: "https://www.onetonline.org/",
      },
      {
        name: "The Muse Career Advice",
        description: "Tips on job searching, interviews, and workplace success.",
        url: "https://www.themuse.com/advice",
      },
    ],
  },
  {
    title: "Job Boards",
    resources: [
      {
        name: "Indeed",
        description: "Search millions of jobs online to find the next step in your career.",
        url: "https://www.indeed.com/",
      },
      {
        name: "Glassdoor",
        description: "Gain insights into salaries, company reviews, and interview questions.",
        url: "https://www.glassdoor.com/index.htm",
      },
    ],
  },
  {
    title: "Online Courses",
    resources: [
      {
        name: "Coursera",
        description: "Online courses from top institutions in tech, business, and more.",
        url: "https://www.coursera.org/",
      },
      {
        name: "edX",
        description: "Advance your career with online courses and degrees from leading universities.",
        url: "https://www.edx.org/",
      },
      {
        name: "Udemy",
        description: "Popular platform for practical skills from industry experts.",
        url: "https://www.udemy.com/",
      },
    ],
  },
  {
    title: "Professional Communities",
    resources: [
      {
        name: "LinkedIn",
        description: "Expand your network with industry professionals and jobs.",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Dev.to (for Software Development)",
        description: "A community of software developers sharing ideas and code.",
        url: "https://dev.to/",
      },
    ],
  },
  {
    title: "Resume and Interview Tools",
    resources: [
      {
        name: "Canva Resume Builder",
        description: "Design beautiful, effective resumes quickly.",
        url: "https://www.canva.com/resumes/templates/",
      },
      {
        name: "Big Interview",
        description: "Ace your interviews with mock questions and career coaching.",
        url: "https://biginterview.com/",
      },
    ],
  }
];

const ExploreResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-background to-[#E5DEFF] py-8 px-4 md:px-14 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <BookOpen className="h-10 w-10 text-violet-500 shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Explore Career Resources</h1>
            <p className="text-muted-foreground">
              Curated tools and links to help you on your career journey: research, network, learn, and prepare for your path ahead!
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {resourceSections.map((section) => (
            <Card key={section.title} className="shadow transition-transform hover:scale-[1.025]">
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>Top resources in this category.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.resources.map((res) => (
                  <a
                    key={res.name}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-muted px-4 py-3 flex items-start gap-4 bg-white hover:bg-violet-50 transition"
                  >
                    <ExternalLink className="h-5 w-5 text-violet-400 mt-2 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-primary group-hover:underline">{res.name}</div>
                      <div className="text-sm text-muted-foreground">{res.description}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <Link to="/results"><span>&larr;</span> Back to Results</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreResources;
