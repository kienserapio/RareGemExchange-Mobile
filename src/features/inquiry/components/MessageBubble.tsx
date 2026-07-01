import { View } from 'react-native';

import { Text } from '@/components/ui';
import { cn } from '@/utils';

import type { ChatMessage } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

/** A single chat bubble, aligned left (bot) or right (user). */
export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <View
      className={cn(
        'my-1 max-w-[80%] rounded-2xl px-4 py-2.5',
        isUser ? 'self-end bg-indigo-600' : 'self-start bg-gray-200',
      )}
    >
      <Text className={cn('text-base', isUser ? 'text-white' : 'text-gray-900')}>
        {message.text}
      </Text>
    </View>
  );
}
