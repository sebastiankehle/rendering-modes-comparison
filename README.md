# Next.js Rendering Modes Comparison

An educational demo application that visualizes and compares the four main rendering patterns in Next.js: SSR, SSG, ISR, and CSR.

## Overview

This project demonstrates the practical differences between Next.js rendering modes through interactive examples, complete with:

- Real-time timestamps and request counts
- Visual flow diagrams showing data flow
- Detailed explanations of pros, cons, and use cases
- Side-by-side comparisons

## Rendering Modes

### SSR (Server-Side Rendering)

HTML is built on the server for every request. Perfect for dynamic, personalized content.

**Use for:** Dashboards, personalized pages, authenticated routes

### SSG (Static Site Generation)

HTML built once at build time and cached. Served instantly from CDN.

**Use for:** Blogs, documentation, marketing pages

### ISR (Incremental Static Regeneration)

Middle ground between SSR and SSG. Pages are regenerated in the background after a set revalidation period.

**Use for:** E-commerce, content feeds, landing pages

### CSR (Client-Side Rendering)

HTML shell is sent to the browser, then JavaScript renders the full UI.

**Use for:** Dashboards, internal tools, complex web applications

## Getting Started

Install dependencies:

```bash
npm install
```

### Development Mode

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note:** In development mode, Next.js doesn't truly perform static generation or ISR. All pages will be dynamically rendered. To see the actual behavior of SSG and ISR, build and run in production mode.

### Production Mode

Build and run in production to see the true rendering behavior:

```bash
npm run build
npm start
```

In production, you'll see:

- **SSG**: Timestamp is truly fixed from build time
- **ISR**: Page revalidates every 10 seconds as configured
- **SSR**: Fresh timestamp on every request
- **CSR**: Client-side timestamp generation

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page with overview
│   ├── ssr/page.tsx       # SSR demo
│   ├── ssg/page.tsx       # SSG demo
│   ├── isr/page.tsx       # ISR demo (10s revalidation)
│   └── csr/page.tsx       # CSR demo
├── components/
│   ├── rendering-demo.tsx  # Timestamp and request count display
│   ├── pattern-info.tsx    # Pattern information card
│   ├── flow-diagram.tsx    # Visual flow diagram
│   └── ui/                 # shadcn/ui components
└── lib/
    ├── counter.ts          # Request counter utility
    └── utils.ts            # Utility functions
```

## Technologies

- Next.js 15.5.5
- React 19.1.0
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- next-themes for theme management

## Key Implementation Details

- **SSR**: Uses default Next.js behavior for dynamic rendering on every request
- **SSG**: Uses `export const dynamic = 'force-static'` to generate at build time
- **ISR**: Uses `export const revalidate = 10` for 10-second revalidation
- **CSR**: Uses `'use client'` directive with `useState` and `useEffect` for client-side rendering

## Theme System

The app uses **next-themes** for seamless dark/light mode switching:

- Theme toggle button on every page
- System theme detection with manual override
- Uses shadcn's default `chart-*` colors for pattern-specific styling
- Automatic color adaptation for light and dark modes
- Color mapping: SSR (chart-1), SSG (chart-2), ISR (chart-5), CSR (chart-4)

## License

MIT
