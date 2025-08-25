import './App.css';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Error from './components/Error';
import JobsDetails, { jobDetailsLoader } from './components/JobsDetails';
import NotFound from './components/NotFound';
import ContactLayout from './layout/ContactLayout';
import JobsLayout from './layout/JobsLayout';
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Home from './pages/Home';
import Jobs, { jobsLoader } from './pages/Jobs';
import Products from './pages/Products';
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path='contact' element={<ContactLayout/>}>
          <Route path='info' element={<ContactInfo />}/>
          <Route path='form' element={<ContactForm />}/>
        </Route>
        
        <Route path='jobs' element={<JobsLayout/>} errorElement={<Error />}>
          <Route index element={<Jobs/>} loader={jobsLoader}/>
          <Route path=':id' element={<JobsDetails />} loader={jobDetailsLoader}/>

        </Route>
        
        <Route path='*' element={<NotFound/>}/>

      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
}

export default App;
