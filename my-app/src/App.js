import logo from './logo.svg';
import './App.css';
import {Welcome, WelcomeProps, WelcomeTwoProps} from './components/Welcome';


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
        </a>
      </header>
      <main>
      <div>
          <Welcome></Welcome>
          <WelcomeProps message='React training'></WelcomeProps>
          <WelcomeTwoProps name='Rafa' message='Welcome to React'></WelcomeTwoProps>
        </div>
      </main>
    </div>
  );
}

export default App;
