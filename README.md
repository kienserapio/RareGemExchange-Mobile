# Rare Gem Exchange

A luxury product-catalog / marketplace mobile app where users browse the rare gems in
the company's collection. This repo is **frontend-only** — architecture, routing,
typing, and clean component boundaries are in place, but there is **no real backend,
auth, or API**. Screens are wired with typed mock data and placeholder handlers marked
with `TODO`.

```
Cold start → Onboarding (3 slides) → Auth (membership application) → Home (gem gallery)
```

## Tech stack

| Concern       | Choice                                                                        |
| ------------- | ----------------------------------------------------------------------------- |
| Framework     | [Expo](https://docs.expo.dev/) SDK 57 (managed)                               |
| Runtime       | React 19.2 · React Native 0.86 (New Architecture)                             |
| Routing       | [Expo Router](https://docs.expo.dev/router) (file-based)                      |
| Language      | TypeScript 6 (strict mode)                                                    |
| Styling       | [NativeWind v4](https://www.nativewind.dev/) (Tailwind v3)                    |
| Fonts         | Cinzel · Plus Jakarta Sans · Montserrat (`@expo-google-fonts`)                |
| Animation     | [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated) |
| Effects       | expo-linear-gradient · masked-view (gradient text) · @expo/vector-icons       |
| Build         | EAS Build (Android APK preview profile)                                       |
| Lint / Format | ESLint 9 (`eslint-config-expo`) + Prettier                                    |

## Prerequisites

- Node.js 20+ and npm
- [Expo Go](https://expo.dev/go) on a device, or an iOS Simulator / Android Emulator

## Getting started

```bash
npm install      # .npmrc pins legacy-peer-deps for the React 19 transition
npm start        # then press: i (iOS) · a (Android) · w (web)
```

### App flow (all placeholder / non-functional)

1. **Onboarding** — 3 branded splash slides with the CTA button. The last slide
   ("Create Account") completes onboarding and routes to auth. State is **in-memory**,
   so the splash shows on every cold start (per request).
2. **Auth** — the Figma "membership application" (Full Name, Email, WhatsApp, Password).
   "Submit Application" calls the placeholder `signIn` and routes home.
3. **Home** — the Figma gem gallery: greeting + search, a hero card, category chips, a
   two-column grid, and a **custom bottom nav** (HOME · BROWSE · INQUIRIES · PROFILE).
   The nav is a **placeholder** — tapping moves the highlight but does not navigate yet.

Route guards enforce the order: unfinished onboarding bounces to the splash flow, then
an unauthenticated user is sent to auth.

## Available scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm start`            | Start the Expo dev server               |
| `npm run ios`          | Start + open the iOS simulator          |
| `npm run android`      | Start + open the Android emulator       |
| `npm run web`          | Start the web build                     |
| `npm run typecheck`    | `tsc --noEmit` — type-check the project |
| `npm run lint`         | ESLint over the repo                    |
| `npm run format`       | Prettier write (sorts Tailwind classes) |
| `npm run format:check` | Prettier check (CI-friendly)            |

## Project structure

```text
app/                          # Expo Router routes ONLY — thin layout + navigation
├─ _layout.tsx                # Root: fonts + splash-hold + providers + root Stack
├─ onboarding.tsx             # -> features/onboarding/OnboardingScreen
├─ +not-found.tsx
├─ (auth)/                    # Route group: onboarding-gated auth
│  ├─ _layout.tsx             #   guards: onboarding done? authed?
│  └─ login.tsx              #   -> features/auth/LoginScreen (the sign-up design)
├─ (app)/                     # Route group: protected area (Stack; custom nav on home)
│  ├─ _layout.tsx             #   guards: onboarding -> authed -> <Stack>
│  ├─ index.tsx               #   Home (gem gallery)
│  └─ inquiry.tsx             #   Inquiry chat (route kept; not yet linked in the nav)
└─ gem/[id].tsx               # Dynamic gem detail

src/
├─ features/
│  ├─ onboarding/             # context, 3-slide data, background/slide/progress, screen
│  ├─ auth/                   # context, form hook, BrandHeader / UnderlineInput / form
│  ├─ gems/                   # home (HomeHeader/HeroGemCard/SecondaryGemCard/CategoryChips)
│  │                          #   + featured data, plus the older list/card/detail + hooks
│  └─ inquiry/               # chat screen, bubble, list, input bar
├─ components/ui/             # Primitives: Button, Card, Input, Screen, Text, CtaButton,
│                            #   GradientText, BottomNav, KeyboardAwareScrollView
├─ hooks/ · lib/ · constants/ · types/ · utils/
│
assets/images/                # background.jpg, logo-gem.png, gem-*.jpg (downloaded from Figma)
tailwind.config.js            # Gold/dark palette + custom fontFamily tokens
eas.json                      # EAS build profiles (preview = internal APK)
```

## Routing map

Route groups `(auth)` / `(app)` do not appear in the URL.

| Route file              | URL           | Screen                                   |
| ----------------------- | ------------- | ---------------------------------------- |
| `app/onboarding.tsx`    | `/onboarding` | `onboarding/OnboardingScreen` (3 slides) |
| `app/(auth)/login.tsx`  | `/login`      | `auth/LoginScreen` (membership form)     |
| `app/(app)/index.tsx`   | `/`           | `gems/HomeScreen` (gem gallery)          |
| `app/(app)/inquiry.tsx` | `/inquiry`    | `inquiry/InquiryScreen`                  |
| `app/gem/[id].tsx`      | `/gem/:id`    | `gems/GemDetailScreen`                   |

## Keyboard & safe area (RN practices)

- **Safe areas** everywhere via `react-native-safe-area-context`: the home header pads
  `insets.top` (below the notch/Dynamic Island), the bottom nav + chat input pad
  `insets.bottom` (above the home indicator), and scroll screens pad both.
- **Keyboard**: the reusable `KeyboardAwareScrollView` (used by auth) keeps focused
  fields above the keyboard — `automaticallyAdjustKeyboardInsets` on iOS and Android's
  `adjustResize` (`app.json` → `android.softwareKeyboardLayoutMode: "resize"`). The chat
  input uses `KeyboardAvoidingView` so it rides above the keyboard.

## Android APK build (EAS Preview)

`eas.json` defines a **`preview`** profile that outputs an installable **APK**:

```jsonc
"preview": { "distribution": "internal", "android": { "buildType": "apk" } }
```

`app.json` has a unique `android.package` (`com.raregemexchange.app`). `eas-cli` is
already installed globally.

**Run the build (on your machine — it uses your Expo account):**

```bash
eas login                                            # if you're not logged in yet
eas build --platform android --profile preview       # kicks off the cloud build
```

- **Login:** `eas login` needs a free [Expo account](https://expo.dev/signup). On the
  **first** build EAS also links this project (writes `extra.eas.projectId` into
  `app.json`) — accept the prompt, or run `eas init` first.
- **Keystore:** the first Android build asks to generate a signing keystore — choose
  **Yes, let EAS manage it** (stored securely on Expo's servers).
- **Result:** the build runs on EAS (~10–20 min); you get a **downloadable APK URL** +
  QR code. Anyone can install it (Android: allow "install from unknown sources").

## Where the real logic plugs in

All placeholders are marked `TODO`. Main seams:

| Area          | File                                                              | Replace with                         |
| ------------- | ----------------------------------------------------------------- | ------------------------------------ |
| Onboarding    | `src/features/onboarding/context/OnboardingContext.tsx`           | Persisted "seen" flag (AsyncStorage) |
| Auth          | `src/features/auth/context/AuthContext.tsx` + `hooks/useLogin.ts` | Real registration / sign-in          |
| Home nav      | `src/components/ui/BottomNav.tsx` + `HomeScreen`                  | Wire items to routes when ready      |
| Home actions  | `HomeScreen` (`handlePlaceholder`) / cards / search               | Real inquiry, search, pagination     |
| API client    | `src/lib/api.ts`                                                  | Real HTTP client + auth headers      |
| Inquiry / bot | `src/features/inquiry/hooks/useInquiryChat.ts`                    | Real chat backend                    |

## Notes

- **ESLint is pinned to v9** (not 10): `eslint-config-expo@57`'s `eslint-plugin-react`
  calls an API ESLint 10 removed, which crashes lint.
- **`.npmrc` sets `legacy-peer-deps=true`** — `expo-router@57` pulls a transitive web dep
  with a React 18 peer range, which conflicts with React 19 under strict resolution.
- **reanimated 4** requires `react-native-worklets` + `babel-preset-expo` (both installed).
- **Typed routes** are off (`app.json` → `experiments.typedRoutes`).
- Translucent panels approximate the Figma `backdrop-blur`; add `expo-blur`'s `BlurView`
  for true frosted glass. The Inquiry screen is still the earlier light placeholder.
- Verified via `npm run typecheck`, `npm run lint`, and a full `expo export` (Metro)
  bundle. Runtime was not exercised on a device/simulator in this environment.

```

```
