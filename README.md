# React Router Job Board

This is a modern and responsive job board application built with React and React Router. It demonstrates best practices for building scalable frontend applications, including nested routing, data loading, and a component-based architecture.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and React Router DOM v7.
- **Nested Routing**: A clean, hierarchical routing structure with nested layouts.
- **Data Loading**: Uses React Router's `loader` functions for efficient, route-based data fetching.
- **Error Handling**: Implements error boundaries for graceful error handling.
- **Mock API**: Comes with a `json-server` setup for a ready-to-run mock backend.
- **Responsive Design**: A clean, mobile-first user interface.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Routing**: React Router DOM 7
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Mock API**: json-server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd react-router-job-board
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the mock API server:**
    In a separate terminal, start the `json-server` to serve the mock job data.
    ```bash
    npm run json-server
    ```
    The API will be available at `http://localhost:5000`.

4.  **Start the development server:**
    In your original terminal, start the Vite development server.
    ```bash
    npm run dev
    ```
    The application will be running at `http://localhost:5173`.

## 📜 Available Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Builds the application for production.
-   `npm run preview`: Serves the production build locally for preview.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run json-server`: Starts the mock API server on `http://localhost:5000`.

## 📁 Project Structure

```
data/
└── db.json          # Mock data for json-server
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── layout/          # Layout components (Root, Jobs, Contact)
├── pages/           # Page components
├── loaders.js       # Data loader functions for React Router
└── main.jsx         # Application entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Open a pull request.

## 📜 License

This project is licensed under the MIT License.
