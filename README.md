# React Router Demo

A simple React application demonstrating client-side routing using React Router DOM. This project showcases basic navigation between multiple pages with a clean, minimal interface.

## Features

- **Home Page**: Welcome page of the application
- **Products Page**: Product listings section
- **About Page**: Information about the application/company
- **Contact Page**: Contact information and form
- **Navigation**: Responsive navbar with React Router links and a logo
- **Get Started Button**: Call-to-action button in the navigation

## Tech Stack

- **React**: 19.1.1 - Modern React with latest features
- **React Router DOM**: 7.8.2 - Declarative routing for React
- **Vite**: 7.1.2 - Fast build tool and development server
- **ESLint**: Code linting and formatting

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
├── pages/
│   ├── Home.jsx           # Home page component
│   ├── Products.jsx       # Products page component
│   ├── About.jsx          # About page component
│   └── Contact.jsx        # Contact page component
├── App.jsx                # Main app component with routing setup
└── main.jsx              # Application entry point
```

## Routing

The application uses React Router DOM for client-side routing with the following routes:
- `/` - Home page
- `/products` - Products page
- `/about` - About page
- `/contact` - Contact page

## Contributing

Feel free to fork this project and submit pull requests with improvements or additional features.
