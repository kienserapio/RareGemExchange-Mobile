import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ChatInputBar } from '../components/ChatInputBar';
import { MessageList } from '../components/MessageList';
import { useInquiryChat } from '../hooks/useInquiryChat';

/**
 * Chatbot-style inquiry screen. KeyboardAvoidingView lifts the input bar above
 * the keyboard; safe-area insets keep messages below the status bar and the
 * input above the home indicator.
 */
export function InquiryScreen() {
  const { messages, draft, setDraft, sendMessage } = useInquiryChat();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View className="flex-1" style={{ paddingTop: insets.top }}>
        <MessageList messages={messages} />
      </View>
      <View style={{ paddingBottom: insets.bottom }}>
        <ChatInputBar value={draft} onChangeText={setDraft} onSend={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
}
