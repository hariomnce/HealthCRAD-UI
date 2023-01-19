// import logo from './logo.svg';
// import './App.css';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel/>
      </header>
    </div>
  );
}

export default App;
