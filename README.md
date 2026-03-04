# Monis Rent - Premium Workspace Collection

A Next.js e-commerce and 3D application for renting premium workspace setups (desks, chairs, accessories).

## Architecture: Feature-Sliced Design (FSD)

This project has been heavily refactored from a standard Next.js directory structure into a modular Feature-Sliced Design.

Our goal is to explicitly separate concerns and push the React Client Boundary (`"use client"`) as deep down the component tree as possible. This ensures great Developer Experience (DX), maximum Server-Side Rendering (SSR) performance, and an easily maintainable codebase.

The architecture is divided into the following layers:

### `src/app/`

Contains only Next.js routing files (`page.tsx`, `layout.tsx`) and global styles. Route handlers are purely Server Components that fetch data (if necessary) and compose features.

### `src/shared/`

Contains generic UI components, motion wrappers, and utilities used across the entire application.

- **`shared/motion/FadeIn.tsx`**: A client-side motion wrapper that accepts server components as children, preventing client-side JS bloat.
- **`shared/components/motion/MotionButton.tsx`**: A purely client-side interactive button, extracted to prevent entire pages from becoming client components.

### `src/features/`

Organized strictly by business domains. A "feature" encapsulates its own components, local state, hooks, and types.

#### `features/home`

The landing page feature set.

- **Refactoring Note**: Removed `"use client"` entirely from `FinalCTA.tsx` and `HeroSection.tsx` by extracting the interactive `motion.button` into the shared `MotionButton` component. This allows the landing page to stream fully from the server.

#### `features/catalog`

Manages the product data and global cart state.

- **Zustand Store (`useCatalogStore`)**: Manages the global state for selected desks, chairs, accessories, and rental periods. Handles complex derived calculations like `totalPrice`, `monthlySavings`, and `allSelectedItems` so UI components remain declarative.
- **SummaryPanel Refactoring**: Broken down a monolithic `SummaryPanel.tsx` into strict sub-components (`SummaryBanner`, `SummaryHeader`, `SummaryItems`, `SummaryPricingToggle`, `SummaryFooter`) housed in a local `summary/` directory. This simplifies the main panel into a pure orchestrator.
- **Builder Page Refactoring**: Extracted the sidebar structural layout wrapper into `CatalogSidebar.tsx` to keep the layout declarative on the Builder page while maintaining the `catalog` domains global boundaries.

#### `features/workspace`

The core feature for the 3D Builder experience, managing WebGL canvas interactions, camera controls, and 3D models.

- **Builder Page Refactoring**: Extracted the main canvas layout wrapper into `WorkspaceLayout.tsx`, reducing the `builder/page.tsx` structural bloat.
- **Component Consistency**: All workspace UI components are strictly enforced as named exports (`export const`) to maintain import consistency across the feature layer.
- **Camera Controls**: Refactored raw `window.addEventListener` WASD input handling into the native `@react-three/drei` `<KeyboardControls>` context provider for safer React lifecycle management and cleaner hook abstractions in `useWASDControls.ts`.
