import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Carrousel from "./components/carrousel/carrousel"
import Main from './components/main/main';
import Products from './components/products/products'


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       <Carrousel/>
       <Main/>
       <Products/>
    </div>
  );
}

export default App;
