import logo from './logo.svg';
import './App.css';
import {Welcome, WelcomeProps, WelcomeTwoProps} from './components/Welcome';
/* import WelcomeProps from './components/WelcomeProps';
import WelcomeTwoProps from './components/WelcomeTwoProps'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Welcome></Welcome>
           <WelcomeProps message='React training'></WelcomeProps>
          <WelcomeTwoProps name='Rafa' message='Welcome to React'></WelcomeTwoProps>
        </a>
      </header>
     
    </div>
  );
}

export default App;
