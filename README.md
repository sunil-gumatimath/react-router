# React Router Advanced 

A comprehensive React application showcasing advanced client-side routing patterns using React Router DOM v7. This project demonstrates complex nested routing, multiple layout components, data loading patterns, and modern React Router features for building scalable single-page applications.

## Features

- **Advanced Nested Routing**: Multi-level nested routing with multiple layout components
- **Dynamic Routing**: URL parameter-based routing with individual job detail pages
- **Layout Components**: RootLayout, ContactLayout, and JobsLayout for different sections
- **Data Loading**: React Router v7 loader functions for data fetching with error handling
- **Error Boundaries**: Route-level error handling with custom error components
- **Advanced Error Handling**: Custom 404 Not Found page and route-specific error boundaries
- **Programmatic Navigation**: useNavigate hook for dynamic navigation
- **Contact Section**: Nested contact routes with info and form sub-pages
- **Jobs Section**: Dynamic jobs listing with individual job details and data loading
- **Responsive Navigation**: Clean navbar with React Router navigation
- **Modern React Patterns**: Latest React hooks and functional components
- **API Integration**: RESTful API integration with error handling and loading states

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
│   ├── ContactInfo.jsx    # Contact information component
│   ├── Error.jsx          # Route-level error boundary component
│   └── JobsDetails.jsx    # Individual job details component
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
│   └── Light.svg          # Light mode icon
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

  <!-- Jobs Section with Dynamic Routes & Error Handling -->
  <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>  # /jobs (with error boundary)
    <Route index element={<Jobs />} loader={jobsLoader} />               # /jobs (with data loading)
    <Route path=":id" element={<JobsDetails />} loader={jobDetailsLoader} /> # /jobs/:id (dynamic route)
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

#### Job Details Loader
```javascript
export const jobDetailsLoader = async ({params}) => {
  const {id} = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw Error('Could not find job details');
  }
  return res.json();
};
```

- Parameter-based loader that extracts `id` from URL parameters
- Fetches individual job details using the dynamic route parameter
- Includes error handling that throws an error for failed requests
- Data is automatically provided to the JobsDetails component

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

### Advanced Error Handling

#### Route-Level Error Boundaries
React Router v7 provides `errorElement` prop for handling errors at the route level:

```javascript
<Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
  <Route index element={<Jobs />} loader={jobsLoader} />
  <Route path=":id" element={<JobsDetails />} loader={jobDetailsLoader} />
</Route>
```

#### Error Component with useRouteError
The `Error` component uses the `useRouteError()` hook to access error information:

```javascript
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigator = useNavigate();

  return (
    <div className='job-details'>
      <h3>An Error occurred.</h3>
      <p>{error.message}</p>
      <button onClick={() => navigator('/')}>Go to homepage</button>
    </div>
  );
};
```

- `useRouteError()` hook provides access to error information thrown by loaders or route components
- Custom error UI with navigation options
- Error boundaries can be applied at any route level for granular error handling

### Basic Error Handling

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

The application is designed to work with a backend API and includes two main endpoints:

### Jobs Listing Endpoint
**URL:** `http://localhost:5000/jobs` (GET)
- Returns an array of all available job objects
- Used by the Jobs page to display the job listing
- Integrated with `jobsLoader` function

### Individual Job Details Endpoint
**URL:** `http://localhost:5000/jobs/:id` (GET)
- Returns a single job object based on the ID parameter
- Used by the JobsDetails page for individual job information
- Integrated with `jobDetailsLoader` function with error handling

### Expected API Response Formats

#### Jobs Listing Response
```json
[
  {
    "id": 1,
    "title": "Sr. React Developer",
    "salary": 50000,
    "location": "London, UK"
  },
  {
    "id": 2,
    "title": "Java Backend Engineer",
    "salary": 60000,
    "location": "Berlin, Germany"
  }
]
```

#### Individual Job Details Response
```json
{
  "id": 1,
  "title": "Sr. React Developer",
  "salary": 50000,
  "location": "London, UK",
  "description": "We are looking for a passionate and skilled professional..."
}
```

### Error Handling
The API integration includes comprehensive error handling:
- Loader functions throw errors for failed requests
- Route-level error boundaries catch and display API errors
- User-friendly error messages with navigation options

## Recent Changes

### Latest Updates (2025-08-25)
- ✅ **Added Dynamic Routing**: Implemented URL parameter-based routing with individual job detail pages (`/jobs/:id`)
- ✅ **Enhanced Error Handling**: Added route-level error boundaries with custom `Error` component using `useRouteError()` hook
- ✅ **New Components**: Added `JobsDetails.jsx` for individual job pages and `Error.jsx` for advanced error handling
- ✅ **Advanced Data Loading**: Implemented `jobDetailsLoader` function with parameter extraction and error handling
- ✅ **Complete API Integration**: Documented both jobs listing and individual job details endpoints
- ✅ **Updated Documentation**: Comprehensive README updates reflecting all new features and patterns

### Architecture Improvements
- **Route-Level Error Boundaries**: Using `errorElement` prop for granular error handling
- **Parameter-Based Loaders**: Dynamic data fetching with URL parameter extraction
- **Enhanced Navigation**: Improved programmatic navigation with error recovery
- **Modern React Router v7 Patterns**: Full implementation of latest routing features

This project serves as an excellent reference for building complex single-page applications with React Router v7.
