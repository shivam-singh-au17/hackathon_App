import './App.css';
import HelpPop from './components/HelpPop/HelpPop';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <HelpPop />
    </div>
  );
}

export default App;
