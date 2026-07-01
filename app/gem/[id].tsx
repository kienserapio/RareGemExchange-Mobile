import { useLocalSearchParams } from 'expo-router';

import { GemDetailScreen } from '@/features/gems';

export default function GemDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <GemDetailScreen gemId={id} />;
}
