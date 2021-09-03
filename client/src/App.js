import logo from './logo.svg';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-wrapper">
          <h2 className="logo-h2" ><span>Full</span> Stack Developer</h2>
          <h3 className="name"> Muhammad Rafeh</h3>
        </div>
        <hr className="hr" />
        <Home />
        
        

      </header>
    </div>
  );
}

export default App;
