# Google AI Studio Clone

This is a frontend clone of Google AI Studio's dashboard interface, built with React and Tailwind CSS.

## Features

- Responsive layout with sidebar navigation
- Project dashboard with cards
- Modern UI components
- Hover and focus states
- Mobile-friendly design

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-studio-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
  ├── components/
  │   └── layout/
  │       ├── Header.tsx
  │       └── Sidebar.tsx
  ├── pages/
  │   └── Dashboard.tsx
  ├── App.tsx
  └── index.tsx
```

## Implemented Components

- Sidebar navigation with icons
- Header with search and profile
- Dashboard with project cards
- Responsive grid layout
- Status indicators
- Interactive buttons and hover states

## Design Decisions

- Used Tailwind CSS for styling
- Implemented responsive design using Tailwind's breakpoint classes
- Used Heroicons for consistent iconography
- Followed Google's Material Design color scheme
- Implemented hover and focus states for better UX

## Known Limitations

- This is a frontend-only implementation
- No actual data persistence
- Limited to dashboard view only
- Placeholder images used for profile pictures
- No actual authentication system

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Heroicons
- Headless UI
