import type { ChatMessage } from '../types';

/** Seed conversation shown when the inquiry screen first opens. */
export const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'bot',
    text: "Hi! I'm the Rare Gem concierge. Ask me anything about a stone in our collection.",
    timestamp: 0,
  },
];

/** Canned replies the placeholder bot cycles through. */
export const mockBotReplies: string[] = [
  'Great question! A gemologist will follow up with full certification details shortly.',
  'That stone is one of the rarest in our current collection.',
  'I can arrange a private viewing or a video inspection on request.',
  'Each gem ships with an independent lab report and provenance documentation.',
];
