# Vintage Retro - Handcrafted Digital Experiences

A warm, nostalgic, handcrafted experience with modern performance. This project showcases a vintage-inspired web design system built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

This project embodies the perfect blend of vintage aesthetics and modern functionality:

- **Vintage Aesthetics**: Warm color palettes, handcrafted textures, and nostalgic typography
- **Modern Performance**: Fast loading, responsive design, and accessibility-first approach
- **Interactive Elements**: Smooth animations and micro-interactions that enhance user experience
- **Accessibility**: Full keyboard navigation, screen reader support, and reduced motion preferences

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion with reduced-motion support
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Routing**: React Router

## 🎯 Key Features

### Design System
- Custom color palette inspired by vintage aesthetics
- Typography system with display and body fonts
- Consistent spacing and border radius tokens
- Responsive grid system

### Components
- **Header**: Sticky navigation with vintage styling
- **Cards**: Handcrafted appearance with hover effects
- **Buttons**: Multiple variants with smooth animations
- **Forms**: Accessible inputs with vintage styling

### Animations
- Smooth page transitions
- Hover effects with grain texture
- Button press animations
- Card flip interactions
- Reduced motion support

### Pages
- **Home**: Hero section with feature showcase
- **About**: Company story and team information
- **Portfolio**: Project gallery with filtering
- **Contact**: Interactive contact form

## 🚀 Getting Started

### Prerequisites
- Node.js 20 LTS
- pnpm 9

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vintage-retro
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🎨 Design Tokens

The project uses a carefully crafted design system with vintage-inspired tokens:

### Colors
- **Ink**: #2F2213 (Primary text)
- **Sepia**: Various shades for vintage warmth
- **Cream**: Light backgrounds and accents
- **Olive**: #6D8A57 (Accent color)
- **Burgundy**: #7A3E3E (Accent color)

### Typography
- **Display**: Cormorant Garamond (Headings)
- **Body**: Source Serif 4 (Body text)

### Spacing
- Consistent 4px base unit
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px

### Animations
- **Micro**: 160ms for small interactions
- **Page**: 240ms for page transitions
- **Easing**: Custom cubic-bezier curves

## 📱 Responsive Design

The project is fully responsive with:
- Mobile-first approach
- Flexible grid system
- Responsive typography
- Touch-friendly interactions

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences
- High contrast ratios

## 🎭 Animation Guidelines

All animations follow these principles:
- **Purposeful**: Every animation serves a functional purpose
- **Smooth**: 60fps performance with proper easing
- **Accessible**: Respects `prefers-reduced-motion`
- **Consistent**: Uses design system timing and easing

## 📦 Project Structure

```
apps/
  client/
    src/
      components/     # Reusable UI components
      pages/         # Page components
      hooks/         # Custom React hooks
      lib/           # Utility functions
      styles/        # Global styles
packages/
  types/            # Shared TypeScript types
  ui/               # Shared UI components
```

## 🤝 Contributing

1. Follow the established code style
2. Use conventional commits
3. Ensure all tests pass
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License.

---

**Handcrafted with ❤️ using vintage aesthetics and modern technology**

