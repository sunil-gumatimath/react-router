# React Router Demo

A modern React application demonstrating advanced client-side routing patterns using React Router DOM v7. This project showcases nested routing architecture with a clean, component-based structure that provides a scalable foundation for larger applications.

## Features

- **Nested Routing Architecture**: Uses React Router v7's nested routing with layout components
- **Root Layout**: Shared layout component with navigation and content outlet
- **Home Page**: Welcome page of the application
- **Products Page**: Product listings section
- **About Page**: Information about the application/company
- **Contact Page**: Contact information and form
- **Navigation**: Responsive navbar with React Router links and a logo
- **Get Started Button**: Call-to-action button in the navigation
- **Modern React Patterns**: Leverages latest React and React Router features

## Tech Stack

- **React**: 19.1.1 - Modern React with latest features and hooks
- **React Router DOM**: 7.8.2 - Latest version with advanced routing features
- **Vite**: 7.1.2 - Fast build tool and development server
- **ESLint**: Code linting and formatting for consistent code quality

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-router
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component with routing links
├── layout/
│   └── RootLayout.jsx     # Root layout component with Outlet for nested routes
├── pages/
│   ├── Home.jsx           # Home page component
│   ├── Products.jsx       # Products page component
│   ├── About.jsx          # About page component
│   └── Contact.jsx        # Contact page component
├── App.jsx                # Main app component with router configuration
├── App.css                # Application styles
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Routing Architecture

The application uses React Router DOM v7's modern routing patterns with nested routes:

### Router Configuration
- Uses `createBrowserRouter` with `createRoutesFromElements` for declarative route definition
- Implements nested routing with `RootLayout` as the parent route
- All page routes are nested under the root layout

### Route Structure
```
<Route path="/" element={<RootLayout />}>
  <Route index element={<Home />} />           # / (default route)
  <Route path="products" element={<Products />} />  # /products
  <Route path="about" element={<About />} />       # /about
  <Route path="contact" element={<Contact />} />   # /contact
</Route>
```

### Layout Components
- **RootLayout**: Parent layout containing the Navbar and content outlet
- Uses `<Outlet />` to render nested route components
- Provides consistent navigation across all pages

### Key Features
- **Nested Routing**: Clean separation of layout and page components
- **Shared Layout**: Navigation and styling shared across all routes
- **Index Routes**: Default route handling for the home page
- **Programmatic Navigation**: Link components for seamless navigation

## Contributing

Feel free to fork this project and submit pull requests with improvements or additional features. The project follows modern React patterns and is structured for easy extension and maintenance.
