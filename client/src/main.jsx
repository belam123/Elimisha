import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './Components/inc/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <LanguageProvider>
      <App />
    </LanguageProvider>
  
)
