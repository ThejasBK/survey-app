export interface Question {
  id: string;
  title: string;
  type: string;
  options: string[];
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface SurveyCardProps {
  survey: Survey;
}

export interface OptionImageProps {
  src: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
