import { View } from 'react-native';

import { Button, Input, Text } from '@/components/ui';

import { useLogin } from '../hooks/useLogin';

/** Email + password form wired to the placeholder login handler. */
export function LoginForm() {
  const { email, setEmail, password, setPassword, isSubmitting, error, handleLogin } = useLogin();

  return (
    <View className="w-full gap-4">
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        returnKeyType="next"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />
      {error ? (
        <Text variant="caption" className="text-red-500">
          {error}
        </Text>
      ) : null}
      <Button label="Log In" onPress={handleLogin} loading={isSubmitting} />
    </View>
  );
}
