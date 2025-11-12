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

### Prerequisites
- Bun

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
