import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mainstyles/global.css'
import App from './App.jsx'
import { AuthProvider } from './context/Auth.jsx'
import { ReservaProvider } from './context/ReservaContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ReservaProvider> 
        <App />
      </ReservaProvider>
    </AuthProvider>
  </StrictMode>,
)
