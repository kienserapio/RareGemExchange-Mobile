import { FlatList } from 'react-native';

import type { ChatMessage } from '../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: ChatMessage[];
}

/** Scrollable list of chat bubbles. */
export function MessageList({ messages }: MessageListProps) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MessageBubble message={item} />}
      className="flex-1"
      contentContainerClassName="p-4"
      showsVerticalScrollIndicator={false}
    />
  );
}
