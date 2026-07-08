import { Pressable, Text as RNText, View } from 'react-native';

import { CtaButton } from '@/components/ui';

import type { OtpChannel } from '../hooks/useOtpChannel';
import { OtpInput } from './OtpInput';

interface RegistrationOtpStepProps {
  title: string;
  destination: string;
  otp: OtpChannel;
  onBack: () => void;
}

/** Shared OTP-verification step UI, used for both the mobile and email channels. */
export function RegistrationOtpStep({ title, destination, otp, onBack }: RegistrationOtpStepProps) {
  return (
    <View className="w-full border border-gold-border/20 bg-black/40 p-8">
      <View className="gap-6">
        <View className="gap-2">
          <RNText className="text-center font-cinzel-bold text-[20px] uppercase tracking-[1px] text-gold">
            {title}
          </RNText>
          <RNText className="text-center font-jakarta text-[12px] leading-[18px] text-subtitle">
            {otp.isSending
              ? `Sending code to ${destination}…`
              : `Enter the 6-digit code sent to ${destination}`}
          </RNText>
        </View>

        <OtpInput value={otp.code} onChange={otp.setCode} autoFocus />

        {otp.error ? (
          <RNText className="text-center font-jakarta text-[12px] text-red-400">{otp.error}</RNText>
        ) : null}

        <CtaButton
          label="Verify"
          onPress={otp.verify}
          loading={otp.isVerifying}
          disabled={otp.isSending}
          showArrow={false}
          className="mt-1 h-[54px] max-w-none border-gold-bronze"
          textClassName="text-gold-bronze"
        />

        <View className="flex-row items-center justify-center gap-1">
          <RNText className="font-jakarta text-[12px] text-muted">Didn&apos;t get a code?</RNText>
          <Pressable onPress={otp.send} disabled={!otp.canResend} hitSlop={8}>
            <RNText
              className={
                otp.canResend
                  ? 'font-jakarta-medium text-[12px] text-gold-bronze underline'
                  : 'font-jakarta-medium text-[12px] text-muted'
              }
            >
              {otp.canResend ? 'Resend' : `Resend in ${otp.resendSeconds}s`}
            </RNText>
          </Pressable>
        </View>

        <Pressable onPress={onBack} hitSlop={8} className="items-center">
          <RNText className="font-jakarta text-[12px] text-subtitle underline">Back</RNText>
        </Pressable>
      </View>
    </View>
  );
}
