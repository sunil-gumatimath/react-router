# React Router Learning Project

A modern job board application built with React Router, showcasing advanced routing patterns, data loading, and error handling.

## Features

- Nested routing with layouts
- Route-based data fetching with loaders
- Error boundaries and 404 handling
- Responsive UI with clean design

## Tech Stack

- React 19
- React Router DOM 7
- Vite
- JSON Server (mock API)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sunil-gumatimath/react-router.git
   cd react-router
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the mock API server:
   ```bash
   bun run json-server
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run json-server` - Start mock API server

## Project Structure

- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/layout/` - Layout components
- `data/db.json` - Mock data

## Routes

- `/` - Home
- `/about` - About
- `/jobs` - Jobs listing
- `/jobs/:id` - Job details
- `/contact/*` - Contact section
- `/products` - Products

## Prerequisites

Before exploring this project, you should have:

- Basic knowledge of React (components, hooks, JSX)
- Understanding of JavaScript ES6+ features
- Familiarity with npm/bun and package management

## Learning Path

Follow this guided path to understand React Router:

### 1. Basic Routing
- Start with `src/App.jsx` to see the router setup
- Explore `src/pages/Home.jsx` and `src/pages/About.jsx` for simple routes
- Check `src/components/Navbar.jsx` for navigation links

### 2. Nested Routes & Layouts
- Examine `src/layout/RootLayout.jsx` for the main layout
- Look at `src/layout/JobsLayout.jsx` and `src/layout/ContactLayout.jsx` for nested layouts
- See how `<Outlet />` works in layouts

### 3. Data Loading
- Check `src/loaders.js` for route loaders
- Explore `src/pages/Jobs.jsx` to see `useLoaderData()` usage
- Look at `src/components/JobsDetails.jsx` for parameterized routes

### 4. Error Handling
- Examine `src/components/Error.jsx` for error boundaries
- See `src/components/NotFound.jsx` for 404 handling

### 5. Advanced Features
- Check form handling in `src/components/ContactForm.jsx`
- Explore programmatic navigation in error components

## What You Learn

This project demonstrates key React Router concepts:

- Nested routing and layouts
- Route loaders for data fetching
- Error boundaries
- Dynamic routes with parameters
- Programmatic navigation