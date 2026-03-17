import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const footerStyle={backgroundColor:"gray"};

function HomePage(){
 return(
  <div>
    <Header></Header>
    <p>Learning React</p>
    <Footer></Footer>
  </div>
 );
  
}

function Header(){
  return(
    <div>
      <h1 style={{textAlign:"right"}}>
        Welcome the React Course
      </h1>
    </div>
  );
}

function Footer(){
  return(
    <div style={footerStyle}>This is the footer</div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </StrictMode>,
)
