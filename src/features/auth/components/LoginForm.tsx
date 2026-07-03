import { Feather } from '@expo/vector-icons';
import { Pressable, Text as RNText, View } from 'react-native';

import { CtaButton } from '@/components/ui';
import { colors } from '@/constants';

import { useLogin } from '../hooks/useLogin';
import { UnderlineInput } from './UnderlineInput';

/** Membership application form (Full Name, Email, WhatsApp, Password). */
export function LoginForm() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    whatsapp,
    setWhatsapp,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    isSubmitting,
    error,
    submit,
  } = useLogin();

  return (
    <View className="w-full border border-gold-border/20 bg-black/40 p-8">
      <View className="gap-7">
        <UnderlineInput
          placeholder="FULL NAME"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          autoComplete="name"
          returnKeyType="next"
        />
        <UnderlineInput
          placeholder="EMAIL ADDRESS"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <UnderlineInput
          placeholder="WHATSAPP NUMBER"
          hint="(For Concierge)"
          value={whatsapp}
          onChangeText={setWhatsapp}
          keyboardType="phone-pad"
          returnKeyType="next"
        />
        <UnderlineInput
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          returnKeyType="done"
          onSubmitEditing={submit}
          rightElement={
            <Pressable onPress={toggleShowPassword} hitSlop={8} accessibilityRole="button">
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color={colors.label} />
            </Pressable>
          }
        />

        {error ? <RNText className="font-jakarta text-[12px] text-red-400">{error}</RNText> : null}

        <CtaButton
          label="Submit Application"
          onPress={submit}
          loading={isSubmitting}
          className="mt-1 h-[54px] max-w-none border-gold-bronze"
          textClassName="text-gold-bronze"
          iconColor={colors.bronze}
        />

        <View className="items-center">
          <RNText className="font-jakarta text-[12px] tracking-[0.6px] text-subtitle">
            Already a member?{' '}
            <RNText className="font-jakarta-medium text-gold-bronze underline" onPress={submit}>
              Sign In
            </RNText>
          </RNText>
        </View>
      </View>
    </View>
  );
}
