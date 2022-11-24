import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginHome from '../LoginHome/LoginHome';
import Inicio from '../Index/Index';
import { FaRegSadTear } from "react-icons/fa";

const AppRoutes = () =>{
	return(
		<Router>
			<Routes>
				<Route path="/login_home" exact element={<LoginHome/>}/>
				<Route path="/" exact element={<Inicio/>}/>
				<Route path="/*" exact element={(
					<h1 className='titulo not-found' >404 <br/>
					 Pagina no encontrada <br/>
					 {<FaRegSadTear/>}</h1>
				)}/>
			</Routes>
		</Router>
	);	 
}



export default AppRoutes;