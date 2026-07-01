/** Formats an epoch-millisecond timestamp as a short local time (e.g. 3:04 PM). */
export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}
