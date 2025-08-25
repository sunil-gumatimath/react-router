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
src/
├── assets/           # Static assets and data
│   ├── data.json    # Job listings data
│   └── ...
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

### Routing Structure
- **Root Layout**: Wraps the entire application with navigation
- **Nested Routes**: Jobs and Contact sections have their own layouts
- **Dynamic Routes**: Job details use parameterized routes (`/jobs/:id`)
- **Index Routes**: Default child routes for nested layouts
- **Error Boundaries**: Route-specific error handling

### Data Flow
- **Loaders**: Route-based data fetching for jobs and job details
- **Static Data**: Job listings stored in JSON format
- **Component Props**: Data passed through route loaders to components

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-router
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Application Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Home page | Welcome section and overview |
| `/about` | About page | Company information |
| `/products` | Products page | Product showcase |
| `/jobs` | Jobs listing | All available job positions |
| `/jobs/:id` | Job details | Individual job information with loader |
| `/contact/info` | Contact info | Contact details and information |
| `/contact/form` | Contact form | Contact form with validation |
| `*` | 404 Page | Custom not found page |

## 🔧 Key Components

### Layout Components
- **RootLayout**: Main application wrapper with navigation
- **JobsLayout**: Jobs section with sidebar navigation
- **ContactLayout**: Contact section with tabbed interface

### Feature Components
- **Navbar**: Responsive navigation with active route highlighting
- **JobsDetails**: Dynamic job detail view with loader
- **ContactForm**: Form handling with validation
- **Error**: Custom error boundary component

## 🎯 Learning Outcomes

This project demonstrates:
- Advanced React Router patterns
- Nested routing and layouts
- Route-based data loading
- Error boundaries and error handling
- Modern React development practices
- Component composition and reusability
- Responsive web design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React Router documentation and examples
- Vite for the excellent development experience
- React community for best practices and patterns

---

Built with ❤️ using React Router and modern web technologies.