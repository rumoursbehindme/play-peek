# 🔧 Project Structure

Here's a breakdown of the folder and file organization for PlayPeek:

```
play-peek/
│
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable UI components (GameCard, SpinningLoader, etc.)
│   ├── pages/                # Route-level components (Home, Genres, Platforms, etc.)
│   ├── services/             # API functions interacting with RAWG
│   ├── types/                # TypeScript interfaces and types
│   ├── App.tsx               # Main app structure with routes
│   ├── main.tsx              # Entry point
├── .env                      # Environment variables
├── index.html                # HTML template
└── vite.config.ts            # Vite configuration
```

This modular setup improves maintainability and scalability.

