import Navbar from '../navbar/Navbar'
import Header from '../header/Header';
import Carrousel from "../carrousel/carrousel"
import Main from '../main/main';
import Products from '../products/products'


const Login_home = () =>  {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Carrousel/>
       <Main/>
       <hr></hr>
       <Products/>
    </div>
  );
}

export default Login_home;