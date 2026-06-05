# Vite + React + TypeScript + Tailwind CSS + shadcn/ui Boilerplate

A modern, production-ready starter template featuring React 19, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui components with state management via Zustand.

## ✨ Features

- ⚡️ **Vite** - Lightning-fast HMR and optimized builds
- ⚛️ **React 19** - Latest React with concurrent features
- 🔷 **TypeScript** - Type-safe development experience
- 🎨 **Tailwind CSS v4** - Utility-first CSS with PostCSS
- 🧩 **shadcn/ui** - Beautiful, accessible component library (New York style)
- 📦 **Zustand** - Lightweight state management
- 🎭 **Lucide Icons** - Modern icon library
- 🔍 **ESLint** - Code linting with React-specific rules
- 🚀 **SWC** - Fast TypeScript/JSX compilation

## 📦 What's Included

### Pre-installed shadcn/ui Components
- Button
- Dialog

### Project Structure
```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utility functions
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main app component with demo
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles & Tailwind config
├── public/              # Public assets
├── components.json      # shadcn/ui configuration
└── vite.config.ts       # Vite configuration with path aliases
```

### Path Aliases
Configured aliases for cleaner imports:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/ui` → `src/components/ui`
- `@/hooks` → `src/hooks`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
# or
bun run dev
```

### Build

```bash
# Build for production
npm run build
# or
bun run build
```

### Preview

```bash
# Preview production build
npm run preview
# or
bun run preview
```

### Linting

```bash
# Run ESLint
npm run lint
# or
bun run lint
```

## 🎨 Tailwind CSS v4

This template uses Tailwind CSS v4 with the new PostCSS architecture:
- Configuration is in `src/index.css` using `@theme` directive
- Custom color scheme with CSS variables for easy theming
- Dark mode support built-in
- `tailwindcss-animate` plugin for animations

## 🧩 Adding shadcn/ui Components

```bash
# Add new components
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
```

Components are configured with:
- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

## 📝 ESLint Configuration

The template includes a basic ESLint setup. For production applications, consider enabling type-aware lint rules:

### Enhanced TypeScript Linting

1. Update `eslint.config.js` to enable type-aware rules:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Replace `tseslint.configs.recommended` with:
   - `tseslint.configs.recommendedTypeChecked` (recommended)
   - `tseslint.configs.strictTypeChecked` (strict)

3. Optionally add `...tseslint.configs.stylisticTypeChecked`

### React-Specific Rules

Install and configure `eslint-plugin-react`:

```bash
npm install -D eslint-plugin-react
```

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 🛠️ Tech Stack Details

### Dependencies
- **React & React DOM** 19.2.4
- **Radix UI** - Headless UI primitives for accessibility
- **class-variance-authority** - Type-safe component variants
- **clsx & tailwind-merge** - Utility for managing class names
- **Zustand** 5.0.1 - State management
- **Lucide React** - Icon library

### Dev Dependencies
- **Vite** 5.4.10 - Build tool
- **TypeScript** 5.6.2 - Type checking
- **@vitejs/plugin-react-swc** - Fast refresh with SWC
- **Tailwind CSS** 4.1.18 - Styling framework
- **ESLint** 9.13.0 - Code linting

## 🎯 Use Cases

This boilerplate is perfect for:
- Dashboard applications
- Admin panels
- SaaS products
- Content management systems
- Any React application requiring beautiful, accessible UI components

## 📄 License

This is a starter template. Use it however you'd like!

## 🤝 Contributing

Feel free to customize this template for your needs. If you find issues or have suggestions, contributions are welcome!