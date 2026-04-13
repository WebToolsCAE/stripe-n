# stripe-n

Stripe notification app — built with **Expo** (React Native, SDK 52).

## What it does

On launch the app requests local-notification permission then schedules 20 "Stripe payment received" notifications, one per second, so you can test how they look on device.

## Getting started

```bash
npm install
npx expo start
```

Press **i** to open in the iOS Simulator, **a** for Android, or scan the QR code with the Expo Go app.

## Custom icon

Replace `assets/no-data-icon.png` with your own image to customise the placeholder shown on the home screen (mirrors the original `Assets.xcassets/NoDataIcon.imageset` behaviour).

## Building for production

Use [EAS Build](https://docs.expo.dev/build/introduction/):

```bash
npx eas build --platform ios
```

