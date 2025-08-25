# React Router Job Board

A modern, responsive job board application built with React Router, showcasing advanced routing patterns and clean architecture. This project demonstrates nested routes, data loading, error boundaries, and layout components in a real-world application.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and React Router DOM v7
- **Nested Routing**: Complex routing structure with nested layouts and routes
- **Data Loading**: Implements route-based data fetching with loaders
- **Error Handling**: Comprehensive error boundaries and 404 pages
- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Job Management**: Full CRUD operations for job listings
- **Contact System**: Multi-page contact section with forms and information
- **Fast Development**: Vite-powered development server for rapid iteration

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.8.2
- **Build Tool**: Vite 7.1.2
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules with modern CSS
- **Code Quality**: ESLint with React-specific rules

## 📁 Project Structure

```
data/
└── db.json          # Mock data for json-server
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── Navbar.jsx  # Navigation component
│   ├── Error.jsx   # Error boundary component
│   ├── JobsDetails.jsx # Job detail view
│   └── ...
├── layout/          # Layout components for different sections
│   ├── RootLayout.jsx     # Main app layout
│   ├── JobsLayout.jsx     # Jobs section layout
│   └── ContactLayout.jsx  # Contact section layout
├── pages/           # Page components
│   ├── Home.jsx     # Landing page
│   ├── About.jsx    # About page
│   ├── Jobs.jsx     # Jobs listing page
│   ├── Products.jsx # Products page
│   └── Contact.jsx  # Contact page
└── main.jsx         # Application entry point
```

## 🏗️ Architecture Highlights

### Advanced Routing Patterns

#### Nested Routing Structure
- **Root Layout**: Wraps the entire application with navigation
- **Nested Routes**: Jobs and Contact sections have their own layouts
- **Dynamic Routes**: Job details use parameterized routes (`/jobs/:id`)
- **Index Routes**: Default child routes for nested layouts
- **Error Boundaries**: Route-specific error handling with `errorElement`

#### Route Configuration (React Router v7)
```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
        <Route index element={<Jobs />} loader={jobsLoader} />
        <Route path=":id" element={<JobsDetails />} loader={jobDetailsLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
```

### Data Loading & Error Handling

#### Loader Functions (React Router v7)
```javascript
// Jobs loader - fetches all jobs
export const jobsLoader = async () => {
  const res = await fetch('http://localhost:5000/jobs');
  return res.json();
};

// Job details loader - fetches specific job by ID
export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw Error('Could not find job details');
  }
  return res.json();
};
```

#### Error Boundary Component
```javascript
import { useRouteError, useNavigate } from 'react-router-dom';

const Error = () => {
  const error = useRouteError(); // React Router v7 hook
  const navigate = useNavigate();

  return (
    <div>
      <h3>An Error occurred.</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate('/')}>Go to homepage</button>
    </div>
  );
};
```

### Data Flow Architecture
- **Route-Based Loading**: Data fetching happens before component rendering
- **Automatic Data Provision**: `useLoaderData()` hook provides data to components
- **Error Propagation**: Loaders can throw errors that are caught by error boundaries
- **Parameter Extraction**: URL parameters automatically extracted and passed to loaders
- **Mock API**: A mock API using `json-server` provides job listings during development.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd react-router-job-board
   ```
   (Replace the URL with your own repository URL)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the Mock API Server**
   In a separate terminal, run the following command to start the `json-server`. This will serve the mock job data on `http://localhost:5000`.
   ```bash
   npm run json-server
   ```

4. **Start the development server**
   In your original terminal, run the following command. The Vite development server will start on `http://localhost:5173`.
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint for code quality checks.
- `npm run json-server` - Start the mock API server on `http://localhost:5000`.

## 🌐 Application Routes & API

### Available Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Home page | Welcome section and overview |
| `/about` | About page | Company information |
| `/products` | Products page | Product showcase |
| `/jobs` | Jobs listing | All available job positions with loader |
| `/jobs/:id` | Job details | Individual job information with parameter loader |
| `/contact/info` | Contact info | Contact details and information |
| `/contact/form` | Contact form | Contact form with validation |
| `*` | 404 Page | Custom not found page with navigation |

### API Endpoints

The application uses a mock API server (`json-server`) for development, which runs on `http://localhost:5000`.

#### Jobs Listing Endpoint
```http
GET /jobs
```
**Response Format:**
```json
[
  {
    "id": 1,
    "title": "Senior React Developer",
    "salary": 50000,
    "location": "London, UK"
  }
]
```

#### Individual Job Details Endpoint
```http
GET /jobs/:id
```
**Response Format:**
```json
{
  "id": 1,
  "title": "Senior React Developer",
  "salary": 50000,
  "location": "London, UK",
  "description": "We are looking for a passionate developer..."
}
```

## 🔧 Key Components & Features

### Layout Components
- **RootLayout**: Main application wrapper with navigation
- **JobsLayout**: Jobs section with sidebar navigation
- **ContactLayout**: Contact section with tabbed interface

### Advanced Feature Components
- **JobsDetails**: Dynamic job detail view with parameter-based data loading
- **Error**: Custom error boundary component using `useRouteError()` hook
- **ContactForm**: Form handling with validation
- **Navbar**: Responsive navigation with active route highlighting

## ⚛️ React Router v7 Features Demonstrated

### Core Hooks & APIs
- **`createBrowserRouter`**: Modern router configuration
- **`createRoutesFromElements`**: Declarative route definition
- **`RouterProvider`**: Router context provider
- **`useLoaderData`**: Access data from route loaders
- **`useRouteError`**: Handle route-level errors
- **`useNavigate`**: Programmatic navigation

### Advanced Patterns
- **Route Loaders**: Data fetching before component rendering
- **Error Boundaries**: Route-specific error handling with `errorElement`
- **Dynamic Routing**: URL parameter extraction with `:id` patterns
- **Nested Routing**: Complex layout hierarchies with `<Outlet />`
- **Index Routes**: Default child routes for nested layouts

### Data Loading Architecture
- **Pre-render Data**: Loaders execute before route components mount
- **Error Handling**: Loaders can throw errors caught by boundaries
- **Parameter Access**: Automatic URL parameter extraction in loaders
- **Type Safety**: Structured data flow from loaders to components

## 🎯 Learning Outcomes & Key Takeaways

### Advanced React Router v7 Concepts Mastered

#### Routing Architecture
- **Declarative Route Configuration**: Using `createBrowserRouter` and `createRoutesFromElements`
- **Nested Route Structures**: Complex layout hierarchies with multiple levels of nesting
- **Dynamic Routing**: Parameter-based routes with automatic parameter extraction
- **Index Routes**: Default child routes for seamless navigation

#### Data Management
- **Route Loaders**: Pre-rendering data fetching with automatic error handling
- **Parameter-Based Loading**: Dynamic data fetching based on URL parameters
- **Error Propagation**: Structured error handling from loaders to boundaries
- **Data Hydration**: Automatic data provision to components via `useLoaderData()`

#### Error Handling & UX
- **Route-Level Error Boundaries**: Granular error handling with `errorElement`
- **Error Hooks**: Using `useRouteError()` for error information access
- **User Recovery**: Providing navigation options in error states
- **Graceful Degradation**: Maintaining functionality despite API failures

### Modern React Patterns Implemented

#### Component Architecture
- **Functional Components**: Modern React with hooks and functional patterns
- **Composition Over Inheritance**: Flexible component composition patterns
- **Custom Hooks**: Leveraging React Router's specialized hooks
- **Performance Optimization**: Efficient rendering and data flow

#### Development Best Practices
- **Type Safety**: Structured data flow and error handling
- **Code Splitting**: Route-based lazy loading opportunities
- **Developer Experience**: Hot reloading and fast development cycles
- **Maintainability**: Clean code structure and comprehensive documentation

### Real-World Application Patterns

#### Enterprise-Ready Features
- **Scalable Architecture**: Modular structure for large applications
- **Production Patterns**: Industry-standard routing and data loading
- **Error Resilience**: Robust error handling for production environments
- **SEO-Friendly**: Proper routing structure for search engine optimization

#### Development Workflow
- **Rapid Prototyping**: Fast development with Vite and modern tooling
- **API Integration**: Structured approach to backend integration
- **Testing Ready**: Architecture that supports comprehensive testing
- **Deployment Ready**: Optimized builds for production deployment

This project serves as a comprehensive reference for building modern, scalable React applications with advanced routing patterns and production-ready architecture.

## 🚀 Deployment & Development

### Building for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Development Tips

#### Working with Loaders
- Loaders run before components mount, ensuring data is available
- Use `console.log()` in loaders for debugging API calls
- Throw errors in loaders to trigger error boundaries

#### Understanding Route Parameters
- Use `:parameterName` in routes to capture URL segments
- Access parameters in loaders via `{ params }` destructuring
- Parameters are automatically URL-decoded

#### Error Handling Strategy
- Route-level errors are caught by `errorElement` components
- Use `useRouteError()` to access error details in error components
- Always provide user-friendly error messages with recovery options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Test loader functions thoroughly with different data scenarios
- Ensure error boundaries provide meaningful user feedback
- Follow React Router v7 patterns for consistent routing
- Test dynamic routes with various parameter values


## 🙏 Acknowledgments

- React Router documentation and examples
- Vite for the excellent development experience
- React community for best practices and patterns

## 📜 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

Built with ❤️ using React Router and modern web technologies.