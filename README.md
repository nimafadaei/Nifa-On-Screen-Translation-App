# Android Screen Translator Sandbox & Developer Blueprint

[![Framework - React](https://img.shields.io/badge/Framework-React_18-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev)
[![Bundler - Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Styling - Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Language - TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![Platform - Android Overlay](https://img.shields.io/badge/Platform-Android_OS-3DDC84?logo=android&logoColor=white&style=flat-square)](https://developer.android.com)

An advanced, interactive simulator and developer workspace engineered to showcase **non-intrusive, floating screen-translation overlays** on Android. This project bridges the gap between web-based interactive simulation and native Android development, providing production-grade **Kotlin blueprints** to solve complex system-level overlay touch propagation issues.

---

## 📱 The Core Problem: Touch Blocking & Gestural Pass-Through

When building screen translators, OCR overlays, or heads-up widgets on Android using `WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY`, developers often encounter a critical UX bottleneck:
> **The Overlay Trap:** Once an overlay layer is rendered on screen to display translated text cardboards, it creates an invisible, full-screen viewport boundary. This blocks touch gestures, preventing users from scrolling games, tapping background buttons, or interacting with the underlying apps (e.g., Google Chrome, active game panels).

This sandbox is built specifically to demonstrate and solve this challenge through three advanced modes:

| Interactive Simulation Mode | Android Architectural Solution | Gesture Pass-Through Profile |
| :--- | :--- | :--- |
| **1. Standard Inline Overlay** | `WindowManager.LayoutParams` with default touch absorption. | Taps are entirely captured by the translation cardboards and their backdrops. |
| **2. Touch Pass-Through (Dynamic Bounds)** | Custom root layout overriding `dispatchTouchEvent` coordinates. | Only taps directly landing on active translation cardboards are captured; all other taps pass through to the background app safely. |
| **3. FLAG_NOT_TOUCHABLE** | Injecting `FLAG_NOT_TOUCHABLE` into the WindowManager layout. | The overlay becomes 100% transparent to gestures. Taps on translating cards pass straight through to background components. |

---

## ✨ Key Features

- 🖥️ **Full Android Device Simulator**: Test real-world application screens (Messaging UI, RPG Game UI, and Web Browser UI) with mock Persian-to-English translation.
- 🧬 **Interactive Touch Vector Visualization**: Toggle custom visual debug highlights demonstrating exactly where touches are blocked (blue overlay rectangles) vs. where they pass-through to background elements (green touch indicators).
- ⚙️ **WindowManager Flags Control Panel**: Instantly toggle `FLAG_NOT_TOUCHABLE` on the simulated device frame to see the immediate effect on gesture propagation.
- 🎨 **Apple Liquid Glass Dark Theme**: Beautiful, immersive iOS/macOS-style dark translucent UI, crafted utilizing backdrop blurs, crisp borders, and refined transitions.
- 💻 **Developer Code Hub**: Complete, production-ready Kotlin templates directly copyable for your native Android implementation.

---

## 🛠️ Technical Architecture & Blueprints

The **Developer Hub** inside the applet contains complete, heavily commented Kotlin source files that solve these problems natively on Android:

### 1. `TouchPassThroughLayout.kt` (Dynamic Hit-Testing)
A custom Android custom view layout container that overrides the touch dispatch pipeline. It intercepts coordinate touches and performs hit-testing against a register of rectangular translation bounds.
* **Mechanism**: If `MotionEvent` coordinates lie outside the bounds of active translation cards, it returns `false`, signaling the Android UI subsystem to pass the event down to background applications.

### 2. `FloatingOverlayService.kt` (Service & LayoutParams Manager)
An Android background `Service` configuring the `WindowManager` to handle overlays without taking screen focus.
* **Mechanism**: Leverages proper combinations of `FLAG_NOT_FOCUSABLE`, `FLAG_NOT_TOUCH_MODAL`, and dynamically toggles `FLAG_NOT_TOUCHABLE` whenever absolute touch-transparency is required by the user.

### 3. `ScreenTranslatorAccessibilityService.kt` (Accessibility Nodes API)
Retrieves text from active screen nodes using Android's `AccessibilityService` APIs (`AccessibilityNodeInfo`), allowing developers to query on-screen text dynamically and map coordinates without taking screenshots.

### 4. `TranslationUXGuide.md`
A comprehensive strategic guide detailing timing thresholds, animation easing parameters, design metrics, and target accessibility touch size specifications (48dp minimum) to maintain highly professional translation interfaces.

---

## 📁 Repository Structure

```bash
├── src/
│   ├── components/
│   │   ├── AndroidPhone.tsx    # Implements device frame, touch-mapping vectors, and overlays
│   │   └── DeveloperHub.tsx    # Manages Kotlin code viewer, copying utility, and tech analyses
│   ├── App.tsx                 # Core UI dashboard, global states, and WindowManager simulators
│   ├── data.ts                 # Hardcoded Kotlin blueprints, simulated app screens, and translation pairs
│   ├── types.ts                # TypeScript types, language preferences, and visual definitions
│   ├── index.css               # Styling entry point integrating Outfit typography and glass textures
│   └── main.tsx                # React application bootstrapper
├── package.json                # Project dependencies and script runner configuration
├── tsconfig.json               # TypeScript compiler preferences
└── vite.config.ts              # Vite bundler options and configurations
```

---

## 🚀 Local Development Setup

To run the simulator and edit code locally, ensure you have [Node.js](https://nodejs.org/) installed, and follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/android-screen-translator-sandbox.git
   cd android-screen-translator-sandbox
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The server runs on [http://localhost:3000](http://localhost:3000).*

4. **Compile the production-ready build:**
   ```bash
   npm run build
   ```
   *This compiles static, highly optimized production assets in the `dist/` directory.*

---

## 📄 License & Contributing

Contributions are highly welcome! Feel free to open bug reports, suggest UX improvements, or submit Pull Requests for more optimized Android Kotlin techniques.

This project is licensed under the [MIT License](LICENSE).
