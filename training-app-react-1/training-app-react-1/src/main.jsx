import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Header(){
  return(
    <div>
      <header>
        Adding Header
      </header>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <App />
  </StrictMode>,
)
