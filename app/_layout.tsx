import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  useEffect(() => {
    requestPermissionAndSchedule();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Stripe', headerLargeTitle: true }} />
    </Stack>
  );
}

async function requestPermissionAndSchedule() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;

  await Notifications.cancelAllScheduledNotificationsAsync();

  for (let i = 1; i <= 20; i++) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Stripe',
        body: 'You have received a payment of $428.00 for 1 item',
        sound: true,
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: i },
    });
  }
}
