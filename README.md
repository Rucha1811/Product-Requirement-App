
# Travel Experience Platform

A modern, multi-page travel web application built with React, TypeScript, and Vite. Features a comprehensive travel planning experience with destination discovery, local guides, artisan connections, and audio travel stories.

## ✨ Features

- 🏖️ **20+ Travel Genres**: From pilgrimage to adventure, beach to cultural experiences
- 🗺️ **500+ Destinations**: Curated travel destinations worldwide
- 👥 **Local Guides**: Connect with 1000+ verified local guides
- 🎧 **Audio Stories**: Immersive travel narratives and experiences
- 📱 **Responsive Design**: Fully responsive across all devices
- 🔐 **User Authentication**: Mock auth system with user, guide, and admin roles
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

## 🎨 Design

Original design from Figma: [View Design](https://www.figma.com/design/INccfJ8btq7wf7TcSrSC2w/Product-Requirements-Document)

  ## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 📄 Pages and Routes

Route definitions live in [src/App.tsx](src/App.tsx).

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, featured destinations, guides, audio stories, and CTA |
| `/explore` | Destination discovery and filtering |
| `/plan-trip` | Interactive trip planning experience |
| `/guides` | Local guides directory |
| `/artisans` | Artisans and makers marketplace |
| `/stories` | Travel stories and narratives |
| `/dashboard` | User dashboard (auth required) |
| `/profile` | User profile management (auth required) |
| `/messages` | Messaging interface (auth required) |
| `/settings` | User settings (auth required) |
| `/admin` | Admin dashboard (admin role required) |

  ## 📁 Project Structure

```
src/
├── pages/              # Route-level page components
├── components/         # Reusable UI components
│   ├── ui/            # Base UI primitives (Radix)
│   └── figma/         # Figma-specific components
├── lib/               # Libraries (auth, router)
├── config/            # App configuration
└── styles/            # Global styles
```

  ## 🚀 Getting started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd "Product Requirements Document"
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
```

The production bundle is emitted to `build/`.

## 📝 Notes

- The Vite alias `@` maps to `src/` (see [vite.config.ts](vite.config.ts))
- Authentication is mock-only (localStorage-based) for demonstration purposes
  - Use `admin@justroam.com` for admin access
  - Any email with "guide" gets guide role
  - All other emails get standard user role
- Custom router implementation using browser History API
- No backend or database - all data is mock/static

## 🐛 Troubleshooting

### Missing images or broken assets
- External image URLs (Unsplash) require an internet connection
- The `ImageWithFallback` component will show a placeholder for broken images

### Type errors
- Ensure all dependencies are installed: `npm install`
- Check that TypeScript can resolve imports from `src/` paths (configured in [vite.config.ts](vite.config.ts))

### Router not working
- The custom router implementation uses browser history API
- Clear localStorage if auth state seems stuck: DevTools → Application → Local Storage → clear

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node version compatibility (requires Node 18+)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is available for educational and portfolio purposes.
  
