# Munky Weather Landing Page

A modern, bilingual landing page for Munky Weather, an iOS weather app that provides accurate forecasts for any location on Earth—not just cities, but peaks, lakes, and campgrounds too.

**Live Site:** [munkyweather.app](https://munkyweather.app)

**iOS App Store Page:** [Munky Weather](https://apps.apple.com/app/id6467945276)

## Overview

This landing page targets outdoor enthusiasts who need reliable weather information for remote locations. Built with Next.js 16 and React 19, it showcases the app's features through an interactive, fully responsive interface with support for English and Spanish.

## Tech Stack

- **Next.js 16** - App Router with Server Components
- **React 19** - Latest version with React Compiler enabled for automatic optimization
- **TypeScript 5** - Strict mode for type safety
- **Tailwind CSS v4** - Using PostCSS plugin with inline theme configuration
- **shadcn/ui** - Component library built on Radix UI primitives
- **Embla Carousel** - Lightweight, accessible carousel for screenshot gallery
- **Lucide React** - Icon system

## Key Features

### Internationalization

- Full bilingual support as the app supports both (English/Spanish)
- Dynamic routing with `[lang]` parameter
- Structured translation system with type-safe content loading
- Proper hrefLang tags and alternate URLs for SEO

### Theme System

- Class-based dark/light mode toggle
- LocalStorage persistence with system preference detection

### Performance & SEO

- React Compiler optimization (no manual memoization needed)
- Optimized image delivery with Next.js Image
- Structured data (JSON-LD schema for mobile app)
- Open Graph and Twitter Card meta tags
- Canonical URLs and meta descriptions
- Vercel Analytics integration

### Accessibility

- ARIA labels and semantic HTML throughout
- Keyboard navigation for interactive components
- Screen reader support

## Project Structure

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding Components

```bash
# Add shadcn/ui components
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/` and can be customized directly.
