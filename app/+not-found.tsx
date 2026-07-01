import { Link, Stack } from 'expo-router';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center gap-4 bg-white p-6">
        <Text variant="title">This screen doesn&apos;t exist.</Text>
        <Link href="/" asChild>
          <Pressable>
            <Text className="text-indigo-600">Go to the catalog</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
