import { View } from 'react-native';

import { Button, Input } from '@/components/ui';

interface ChatInputBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

/** Bottom input row: text field + send button. */
export function ChatInputBar({ value, onChangeText, onSend }: ChatInputBarProps) {
  return (
    <View className="flex-row items-center gap-2 border-t border-gray-200 bg-white p-3">
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Ask about a gem…"
        onSubmitEditing={onSend}
        returnKeyType="send"
        containerClassName="flex-1"
      />
      <Button label="Send" onPress={onSend} />
    </View>
  );
}
