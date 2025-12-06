export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}