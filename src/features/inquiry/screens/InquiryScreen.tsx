import { KeyboardAvoidingView, Platform } from 'react-native';

import { ChatInputBar } from '../components/ChatInputBar';
import { MessageList } from '../components/MessageList';
import { useInquiryChat } from '../hooks/useInquiryChat';

/** Chatbot-style inquiry screen. Lives in the (app) tab group. */
export function InquiryScreen() {
  const { messages, draft, setDraft, sendMessage } = useInquiryChat();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <MessageList messages={messages} />
      <ChatInputBar value={draft} onChangeText={setDraft} onSend={sendMessage} />
    </KeyboardAvoidingView>
  );
}
