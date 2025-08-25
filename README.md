# React Router Advanced Demo

A comprehensive React application showcasing advanced client-side routing patterns using React Router DOM v7. This project demonstrates complex nested routing, multiple layout components, data loading patterns, and modern React Router features for building scalable single-page applications.

## Features

- **Advanced Nested Routing**: Multi-level nested routing with multiple layout components
- **Layout Components**: RootLayout, ContactLayout, and JobsLayout for different sections
- **Data Loading**: React Router v7 loader functions for data fetching
- **Error Handling**: Custom 404 Not Found page with navigation
- **Programmatic Navigation**: useNavigate hook for dynamic navigation
- **Contact Section**: Nested contact routes with info and form sub-pages
- **Jobs Section**: Dynamic jobs listing with data loading and sample data
- **Responsive Navigation**: Clean navbar with React Router navigation
- **Modern React Patterns**: Latest React hooks and functional components

## Tech Stack

- **React**: 19.1.1 - Modern React with hooks and functional components
- **React Router DOM**: 7.8.2 - Advanced routing with loaders and nested routes
- **Vite**: 7.1.2 - Fast development server and build tool
- **ESLint**: Code quality and linting

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
│   ├── Navbar.jsx         # Main navigation component
│   ├── NotFound.jsx       # 404 error page with navigation
│   ├── ContactForm.jsx    # Contact form component
│   └── ContactInfo.jsx    # Contact information component
├── layout/
│   ├── RootLayout.jsx     # Root layout with navbar and outlet
│   ├── ContactLayout.jsx  # Contact section layout
│   └── JobsLayout.jsx     # Jobs section layout
├── pages/
│   ├── Home.jsx           # Home page component
│   ├── Products.jsx       # Products page component
│   ├── About.jsx          # About page component
│   ├── Contact.jsx        # Contact page component
│   └── Jobs.jsx           # Jobs listing with data loader
├── assets/
│   ├── data.json          # Sample jobs data
│   ├── react.svg          # React logo
│   └── Dark.svg           # Dark mode icon
├── App.jsx                # Main app with router configuration
├── App.css                # Application styles
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Routing Architecture

The application implements a sophisticated routing structure using React Router DOM v7:

### Router Configuration
- Uses `createBrowserRouter` with `createRoutesFromElements` for declarative routing
- Implements nested routing with multiple layout components
- Features data loading with loader functions
- Includes catch-all route for 404 handling
- Uses `RouterProvider` to supply routing context (React Router v7 pattern)

### Route Structure
```
<Route path="/" element={<RootLayout />}>
  <Route index element={<Home />} />                    # / (home page)
  <Route path="products" element={<Products />} />       # /products
  <Route path="about" element={<About />} />            # /about

  <!-- Contact Section with Nested Routes -->
  <Route path="contact" element={<ContactLayout />}>    # /contact
    <Route path="info" element={<ContactInfo />} />      # /contact/info
    <Route path="form" element={<ContactForm />} />      # /contact/form
  </Route>

  <!-- Jobs Section with Data Loading -->
  <Route path="jobs" element={<JobsLayout />}>          # /jobs
    <Route index element={<Jobs />} loader={jobsLoader} /> # /jobs (with data loading)
  </Route>

  <!-- 404 Handling -->
  <Route path="*" element={<NotFound />} />             # 404 for unmatched routes
</Route>
```

### Layout Components

#### RootLayout
- Main application layout containing the navigation bar
- Uses `<Outlet />` to render nested route components
- Provides consistent navigation across all pages

#### ContactLayout
- Specific layout for the contact section
- Renders the main Contact component and uses `<Outlet />` for sub-routes
- Demonstrates section-specific layout patterns

#### JobsLayout
- Layout for the jobs section with header and description
- Uses `<Outlet />` for nested job-related content
- Shows how to create section-specific layouts

### Data Loading

The application demonstrates React Router v7's data loading capabilities:

#### Jobs Loader
```javascript
export const jobsLoader = async () => {
  const res = await fetch('http://localhost:5000/jobs');
  return res.json();
};
```

- Loader function fetches job data from external API
- Data is automatically provided to the component via `useLoaderData()` hook
- Handles async data fetching before route rendering

#### Sample Data
The `src/assets/data.json` file contains sample job data for development:
```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Sr. React Developer",
      "salary": 50000,
      "location": "London, UK"
    }
    // ... more job entries
  ]
}
```

### Error Handling

#### 404 Not Found
- Custom `NotFound` component for unmatched routes
- Uses `useNavigate()` hook for programmatic navigation
- Provides user-friendly error handling with navigation options

## Advanced Features

### Nested Routing Patterns
- Demonstrates multi-level nesting with different layout components
- Shows how to structure complex applications with section-specific layouts
- Illustrates the use of `<Outlet />` for rendering nested content

### Data Loading Integration
- Shows how to integrate external APIs with React Router loaders
- Demonstrates automatic data fetching and component hydration
- Provides error boundaries and loading states (can be extended)

### Navigation Patterns
- Declarative navigation with `Link` components
- Programmatic navigation with `useNavigate()` hook
- Active link styling and navigation state management

## API Integration

The application is designed to work with a backend API. The Jobs section expects a JSON API endpoint at `http://localhost:5000/jobs` that returns an array of job objects.

### Expected API Response Format
```json
[
  {
    "id": 1,
    "title": "Job Title",
    "salary": 50000,
    "location": "City, Country"
  }
]
```

## Contributing

Feel free to fork this project and submit pull requests with improvements or additional features. The project demonstrates modern React Router patterns and is structured for easy extension and maintenance.

### Adding New Routes
1. Create page components in `src/pages/`
2. Add layout components in `src/layout/` if needed
3. Update the route configuration in `src/App.jsx`
4. Add navigation links in `src/components/Navbar.jsx`

### Extending Data Loading
- Add loader functions for new data requirements
- Implement error boundaries for robust error handling
- Add loading states for better user experience

This project serves as an excellent reference for building complex single-page applications with React Router v7.
