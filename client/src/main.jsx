import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
    
  </StrictMode>,
)
