import { View } from 'react-native';

import { Screen, Text } from '@/components/ui';
import { appConfig } from '@/constants';

import { LoginForm } from '../components/LoginForm';

/** Standalone auth screen for the (auth) route group. */
export function LoginScreen() {
  return (
    <Screen className="justify-center px-6">
      <View className="mb-8 gap-2">
        <Text variant="title">{appConfig.name}</Text>
        <Text variant="body" className="text-gray-500">
          Sign in to browse the collection.
        </Text>
      </View>
      <LoginForm />
    </Screen>
  );
}
