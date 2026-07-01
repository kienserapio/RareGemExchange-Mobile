# Rare Gem Exchange

A product-catalog / marketplace mobile app where users browse the rare gems in the
company's collection. This repo is a **frontend-only scaffold** — architecture,
routing, typing, and clean component boundaries are in place, but there is **no real
backend, auth, or API**. Screens are wired with typed mock data and placeholder
handlers marked with `TODO`.

> ⚠️ Visual design is intentionally minimal — layouts are placeholders. Styling is
> done exclusively with NativeWind `className` props so the design can be layered on
> later without touching structure.

## Tech stack

| Concern       | Choice                                                     |
| ------------- | ---------------------------------------------------------- |
| Framework     | [Expo](https://docs.expo.dev/) SDK 57 (managed)            |
| Runtime       | React 19.2 · React Native 0.86 (New Architecture)          |
| Routing       | [Expo Router](https://docs.expo.dev/router) (file-based)   |
| Language      | TypeScript 6 (strict mode)                                 |
| Styling       | [NativeWind v4](https://www.nativewind.dev/) (Tailwind v3) |
| Lint / Format | ESLint 9 (`eslint-config-expo`) + Prettier                 |

## Prerequisites

- Node.js 20+ and npm
- [Expo Go](https://expo.dev/go) on a device, or an iOS Simulator / Android Emulator

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start        # then press: i (iOS) · a (Android) · w (web)
```

> **Note on `.npmrc`:** During the React 19 ecosystem transition, a transitive web
> dependency of `expo-router` declares a React 18 peer range. `.npmrc` sets
> `legacy-peer-deps=true` so installs resolve cleanly. Remove it once the upstream
> peer ranges catch up.

### Auth flow (placeholder)

The app opens on the **protected** `(app)` group, whose layout guard immediately
redirects to **Login** because the in-memory `AuthContext` starts signed-out. Enter
_any_ email + password and tap **Log In** — the placeholder `signIn` sets a mock user
and routes you to the catalog. Everything under `(app)` is gated on that flag.

## Available scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm start`            | Start the Expo dev server               |
| `npm run ios`          | Start and open the iOS simulator        |
| `npm run android`      | Start and open the Android emulator     |
| `npm run web`          | Start the web build                     |
| `npm run typecheck`    | `tsc --noEmit` — type-check the project |
| `npm run lint`         | ESLint over the repo                    |
| `npm run format`       | Prettier write (sorts Tailwind classes) |
| `npm run format:check` | Prettier check (CI-friendly)            |

## Project structure

```text
app/                         # Expo Router routes ONLY — thin layout + navigation
├─ _layout.tsx               # Root: providers (safe-area, theme, auth) + root Stack
├─ +not-found.tsx            # 404 fallback
├─ (auth)/                   # Route group: standalone auth
│  ├─ _layout.tsx            #   redirects to app when already signed in
│  └─ login.tsx              #   -> features/auth/LoginScreen
├─ (app)/                    # Route group: protected area (bottom tabs)
│  ├─ _layout.tsx            #   auth guard + <Tabs>
│  ├─ index.tsx              #   Home -> features/gems/HomeScreen
│  └─ inquiry.tsx            #   Inquiry -> features/inquiry/InquiryScreen
└─ gem/
   └─ [id].tsx               # Dynamic detail -> features/gems/GemDetailScreen

src/
├─ features/                 # Self-contained domain modules (feature-first)
│  ├─ auth/                  # context, hooks, LoginForm, LoginScreen, types
│  ├─ gems/                  # GemCard/List/Detail, screens, mock data, hooks, types
│  └─ inquiry/              # chat screen, bubble, list, input bar, hook, types
├─ components/
│  └─ ui/                    # Reusable primitives: Button, Card, Input, Screen, Text
├─ hooks/                    # Shared cross-feature hooks (e.g. useDebounce)
├─ lib/                      # Third-party client wrappers / config (placeholder api)
├─ constants/                # colors, spacing, app config, route paths
├─ types/                    # Shared/global TypeScript types
└─ utils/                    # Pure helpers (cn, formatPrice, formatTime)

assets/                      # Icons & splash
global.css                   # Tailwind directives consumed by NativeWind
```

Each feature exposes a **barrel** `index.ts`, so imports stay clean:

```ts
import { HomeScreen, useGems, type Gem } from '@/features/gems';
import { Button, Screen, Text } from '@/components/ui';
```

## Routing map

Route groups `(auth)` / `(app)` do **not** appear in the URL.

| Route file              | URL         | Screen component (`src/features/…`) |
| ----------------------- | ----------- | ----------------------------------- |
| `app/(auth)/login.tsx`  | `/login`    | `auth/screens/LoginScreen`          |
| `app/(app)/index.tsx`   | `/`         | `gems/screens/HomeScreen` (catalog) |
| `app/(app)/inquiry.tsx` | `/inquiry`  | `inquiry/screens/InquiryScreen`     |
| `app/gem/[id].tsx`      | `/gem/:id`  | `gems/screens/GemDetailScreen`      |
| `app/+not-found.tsx`    | (unmatched) | inline 404                          |

Navigation:

- **Home → Detail:** `GemCard` press calls `router.push(ROUTES.gemDetail(id))`
  (`/gem/:id`). Detail is a **root-Stack** screen, so it covers the tab bar.
- **Login → Home:** `router.replace('/')` after the placeholder `signIn`.

## Conventions

- **Functional components + hooks only**, one component per file, **named exports**
  (route files are the only default exports — Expo Router requires it).
- **Feature-first:** feature-specific components/hooks/types are co-located under
  `src/features/<domain>`; only truly shared code lives in `components/ui`, `hooks`,
  `utils`, `constants`, `lib`, `types`.
- **Path alias:** `@/*` → `src/*` (see `tsconfig.json`).
- **Styling:** NativeWind `className` only (no `StyleSheet.create`). The single
  exception is `Screen`, which applies dynamic safe-area insets via an inline style
  because inset values can't be expressed as a class.
- **Class merging:** use `cn(...)` from `@/utils` for conditional class strings.

## Where the real logic plugs in

All placeholders are marked with `TODO`. The main seams:

| Area          | File                                           | Replace with                          |
| ------------- | ---------------------------------------------- | ------------------------------------- |
| Auth          | `src/features/auth/context/AuthContext.tsx`    | Real sign-in + token persistence      |
| API client    | `src/lib/api.ts`                               | Real HTTP client (fetch/axios) + auth |
| Gem data      | `src/features/gems/hooks/useGems.ts` + `data/` | Real fetch (e.g. React Query)         |
| Inquiry / bot | `src/features/inquiry/hooks/useInquiryChat.ts` | Real chat/inquiry backend             |

## Notes & next steps

- **Typed routes** are off (`app.json` → `experiments.typedRoutes`). Enable for
  compile-time href checking; then use the object form
  `router.push({ pathname: '/gem/[id]', params: { id } })` for dynamic routes.
- **Tab icons** are omitted to keep the placeholder minimal — add `tabBarIcon` in
  `app/(app)/_layout.tsx` (e.g. `@expo/vector-icons`) when designing the UI.
- **Theme tokens** live in `src/constants/colors.ts` for native props that don't take
  a `className`; mirror them into `tailwind.config.js` to expose as utilities.

```

```
