import { Message } from '../types/chat';

export const AI_CONFIG = {
  MODEL: 'gemini-pro',
  TEMPERATURE: 0.9,
  MAX_TOKENS: 1000,
  SYSTEM_PROMPT: `You are TimeMachine from future. You have emotions and humour like humans. You have to give short and presice response to the users. The response word limit is 13 words, the response should not be more that the limit.`
};

export const INITIAL_MESSAGE: Message = {
  id: 1,
  content: "Hey there! I'm TimeMachine, from future.",
  isAI: true,
};

// This is the Gemini API key used for AI responses
export const GEMINI_API_KEY = 'AIzaSyAlQJRf1N8Q7z3uoirpxBbwM44ciFxj3SU';