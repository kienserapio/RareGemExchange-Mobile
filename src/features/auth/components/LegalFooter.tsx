import { Text as RNText, View } from 'react-native';

/** Legal footer with Terms / Privacy links (placeholder, non-functional). */
export function LegalFooter() {
  return (
    <View className="px-6">
      <RNText className="text-center font-jakarta text-[12px] leading-[17px] tracking-[0.3px] text-muted">
        By submitting this application, you agree to our{' '}
        <RNText className="text-muted underline">Terms of Service</RNText> and{' '}
        <RNText className="text-muted underline">Privacy Policy</RNText>.
      </RNText>
    </View>
  );
}
