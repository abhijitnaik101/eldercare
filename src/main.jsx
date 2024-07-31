import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalFooter } from './components/Footer.jsx'
import './index.css'
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('foot')).render(
  <React.StrictMode>
    <GlobalFooter />
  </React.StrictMode>
);