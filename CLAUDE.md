# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm run start

# Run ESLint
npm run lint

# Format code with Prettier
npx prettier --write .

# Add shadcn/ui components
npx shadcn@latest add <component-name>
```

## Tech Stack

- **Next.js 16.1.1** - App Router architecture (`src/app/` directory)
- **React 19.2.3** - Latest version with React Compiler optimization enabled
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS 4** - Using PostCSS plugin with `@theme inline` directive
- **shadcn/ui 3.6.2** - Component library with utilities installed
- **Geist Fonts** - Loaded via `next/font/google` with CSS variables

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Home page route
│   └── globals.css         # Global styles with Tailwind and theme variables
└── lib/
    └── utils.ts            # Utility functions (cn helper for className merging)
```

- Uses App Router (not Pages Router) - all routes are in `src/app/`
- Path alias: `@/*` maps to `src/*` (configured in [tsconfig.json](tsconfig.json#L21-L23))
- Page components are Server Components by default (add `"use client"` for Client Components)
- shadcn/ui components will be added to `src/components/ui/` when installed

## Important Configuration

### React Compiler
The React Compiler is **enabled** in [next.config.ts](next.config.ts#L5) (`reactCompiler: true`). This provides automatic optimization of React components. Avoid manual memoization patterns like `useMemo`, `useCallback`, or `React.memo` unless necessary for specific use cases.

### Tailwind CSS v4 with shadcn/ui Theme
This project uses Tailwind CSS v4 with the PostCSS plugin and a comprehensive shadcn/ui design system:

- Import method: `@import "tailwindcss"` and `@import "tw-animate-css"` in [globals.css](src/app/globals.css#L1-L2)
- Theme configuration: Uses `@theme inline` directive with extensive color and radius variables
- Custom dark mode variant: `@custom-variant dark (&:is(.dark *))` for class-based dark mode toggling
- No separate `tailwind.config.js` file - theme is defined inline in CSS

### shadcn/ui Setup

**Installed Dependencies:**
- `class-variance-authority` - For component variants
- `clsx` - Conditional className utility
- `tailwind-merge` - Merge Tailwind classes without conflicts
- `lucide-react` - Icon library
- `tw-animate-css` - Animation utilities for Tailwind

**Utility Functions:**
- `cn()` helper in [src/lib/utils.ts](src/lib/utils.ts) - Combines `clsx` and `tailwind-merge` for optimal className handling
- Use this for all conditional className logic: `cn("base-classes", condition && "conditional-classes")`

### Styling Architecture

The project uses a comprehensive design system with CSS variables defined in [globals.css](src/app/globals.css):

**Design Tokens (in `:root` and `.dark`):**
- **Colors**: Uses OKLCH color space for better perceptual uniformity
  - Semantic colors: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`
  - Component colors: `--card`, `--popover`, `--input`, `--border`, `--ring`
  - Chart colors: `--chart-1` through `--chart-5`
  - Sidebar colors: `--sidebar`, `--sidebar-primary`, `--sidebar-accent`, etc.

- **Border Radius**: Dynamic radius system based on `--radius: 0.625rem`
  - `--radius-sm` through `--radius-4xl` (calculated from base radius)

- **Fonts**: `--font-geist-sans` and `--font-geist-mono` set in [layout.tsx](src/app/layout.tsx#L5-L13)

**Dark Mode:**
- Uses class-based dark mode (`.dark` class on parent element)
- Custom variant defined: `@custom-variant dark (&:is(.dark *))`
- All theme colors have dark mode values in [globals.css](src/app/globals.css#L84-L116)
- Dark mode colors use OKLCH with alpha channels for borders/inputs

**Base Layer:**
- All elements get `border-border` and `outline-ring/50` by default
- Body uses `bg-background` and `text-foreground` utilities

### Prettier Configuration
- Print width: 100 characters
- Tab width: 2 spaces
- Single quotes enabled
- Uses `prettier-plugin-tailwindcss` for automatic class sorting

## Font Configuration

Fonts are configured in [layout.tsx](src/app/layout.tsx) using `next/font/google`:
- Primary font: Geist (`--font-geist-sans`)
- Monospace font: Geist Mono (`--font-geist-mono`)
- Applied via CSS variables to the `<body>` element
- Fonts are automatically optimized by Next.js

## Working with shadcn/ui Components

When adding new shadcn/ui components:
1. Components will be installed to `src/components/ui/`
2. Always use the `cn()` utility from `@/lib/utils` for className merging
3. Components follow the shadcn/ui pattern of being copy-paste friendly - they're yours to modify
4. Use Lucide React for icons: `import { IconName } from "lucide-react"`
