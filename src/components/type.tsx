export interface TitleDescription {
  title: string;
  description: string;
}

export interface ApproachProps {
  number: string;
  title: string;
  description: React.JSX.Element;
  imageURL1?: string;
  imageURL2?: string; // Optional prop
}
