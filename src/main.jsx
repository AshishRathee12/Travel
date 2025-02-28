import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
// import Example from './component/Hotelname/Offcanvas/Offcanvas.jsx';
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <App />
      {/* <Example /> */}
    </StrictMode>
  </BrowserRouter>
)
