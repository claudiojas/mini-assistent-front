export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export type Persona = 'Linkedin' | 'GitHub';

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  persona: Persona;
}