import { Feather } from '@expo/vector-icons';
import { Pressable, Text as RNText, TextInput, View } from 'react-native';

import { CtaButton } from '@/components/ui';
import { colors } from '@/constants';

import type { useRegistration } from '../hooks/useRegistration';
import { CountryCodePicker } from './CountryCodePicker';
import { UnderlineInput } from './UnderlineInput';

interface RegistrationDetailsFormProps {
  registration: ReturnType<typeof useRegistration>;
}

/** Step 1 of registration: legal name, mobile (with area code), email, password. */
export function RegistrationDetailsForm({ registration }: RegistrationDetailsFormProps) {
  const {
    fullName,
    setFullName,
    countryCode,
    setCountryCode,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    detailsError,
    submitDetails,
  } = registration;

  return (
    <View className="w-full border border-gold-border/20 bg-black/40 p-8">
      <View className="gap-7">
        <UnderlineInput
          placeholder="FULL LEGAL NAME"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          autoComplete="name"
          returnKeyType="next"
        />

        <View className="w-full flex-row items-center gap-3 border-b border-track pb-2">
          <CountryCodePicker value={countryCode} onChange={setCountryCode} />
          <TextInput
            placeholder="MOBILE NUMBER"
            placeholderTextColor={colors.label}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
            returnKeyType="next"
            className="h-9 flex-1 font-jakarta-semibold text-[14px] tracking-[1px] text-gold"
          />
        </View>

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
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          returnKeyType="next"
          rightElement={
            <Pressable onPress={toggleShowPassword} hitSlop={8} accessibilityRole="button">
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color={colors.label} />
            </Pressable>
          }
        />

        <UnderlineInput
          placeholder="CONFIRM PASSWORD"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          autoCapitalize="none"
          returnKeyType="done"
          onSubmitEditing={submitDetails}
          rightElement={
            <Pressable onPress={toggleShowConfirmPassword} hitSlop={8} accessibilityRole="button">
              <Feather name={showConfirmPassword ? 'eye' : 'eye-off'} size={18} color={colors.label} />
            </Pressable>
          }
        />

        {detailsError ? (
          <RNText className="font-jakarta text-[12px] text-red-400">{detailsError}</RNText>
        ) : null}

        <CtaButton
          label="Continue"
          onPress={submitDetails}
          className="mt-1 h-[54px] max-w-none border-gold-bronze"
          textClassName="text-gold-bronze"
          iconColor={colors.bronze}
        />

        <View className="items-center">
          <RNText className="font-jakarta text-[12px] tracking-[0.6px] text-subtitle">
            Already a member?{' '}
            <RNText className="font-jakarta-medium text-gold-bronze underline">Sign In</RNText>
          </RNText>
        </View>
      </View>
    </View>
  );
}
