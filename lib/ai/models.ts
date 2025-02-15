import { GoogleGenerativeAI } from '@google/generative-ai';
import { customProvider } from 'ai';
import { google } from '@ai-sdk/google';

export const DEFAULT_CHAT_MODEL: string = 'gemini-1.5-pro';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export const myProvider = customProvider({
  languageModels: {
    'gemini-1.5-pro': google('gemini-1.5-pro'),
    'title-model': google('gemini-1.5-pro'),
    'artifact-model': google('gemini-1.5-pro'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    description: 'Large model for complex, multi-step tasks',
  },
];
