// import logo from './logo.svg';
// import './App.css';
import Button from './component/Button';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <Button/>
      </header>
    </div>
  );
}

export default App;
