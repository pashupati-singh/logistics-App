import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './MainRoutes/MainRoutes';
import { Footer } from './Page/Footer';

function App() {
  return (
    <div className="App">
    <div className="container">
    <Navbar />
     <MainRoutes />
     <Footer />
    </div>
    </div>
  );
}

export default App;
