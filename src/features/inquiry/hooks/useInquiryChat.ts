import { useCallback, useState } from 'react';

import { initialMessages, mockBotReplies } from '../data/mockMessages';
import type { ChatMessage } from '../types';

let messageCounter = 0;
function createId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

function pickBotReply(): string {
  const index = Math.floor(Math.random() * mockBotReplies.length);
  return mockBotReplies[index] ?? 'Thanks for reaching out!';
}

/**
 * Chat state for the inquiry screen. Appends the user's message immediately and
 * simulates a bot reply after a short delay.
 *
 * TODO: Replace `pickBotReply` + setTimeout with a real chat/inquiry API call.
 */
export function useInquiryChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState('');

  const sendMessage = useCallback(() => {
    const text = draft.trim();
    if (!text) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createId('user'),
      role: 'user',
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setDraft('');

    const botMessage: ChatMessage = {
      id: createId('bot'),
      role: 'bot',
      text: pickBotReply(),
      timestamp: Date.now(),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  }, [draft]);

  return { messages, draft, setDraft, sendMessage };
}
