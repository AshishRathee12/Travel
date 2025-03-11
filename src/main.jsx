import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import store from './redux for saving/store.jsx';
import { Provider } from 'react-redux'


// import Example from './component/Hotelname/Offcanvas/Offcanvas.jsx';
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter >
)
