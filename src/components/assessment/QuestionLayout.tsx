
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

interface QuestionLayoutProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (questionId: string, answer: string) => void;
}

const QuestionLayout = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer 
}: QuestionLayoutProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
      
      <RadioGroup
        value={selectedAnswer}
        onValueChange={(value) => onSelectAnswer(question.id, value)}
        className="space-y-4"
      >
        {question.options.map((option) => (
          <div key={option.id} className="flex items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
            <RadioGroupItem 
              value={option.id} 
              id={`${question.id}-${option.id}`} 
              className="mt-1"
            />
            <Label 
              htmlFor={`${question.id}-${option.id}`}
              className="flex-1 cursor-pointer font-normal leading-relaxed"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuestionLayout;
