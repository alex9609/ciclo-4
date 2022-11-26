import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from '../LoginHome/LoginHome';
import Inicio from '../Index/Index';
import { FaRegSadTear } from "react-icons/fa";
import PrivateRoute from '../auth/privaterouter';
import EmpleadosBuscar from '../empleados/inicioe'



const AppRoutes = () =>{
	return(   
		<Router>
			<Switch>
				<Route exact path={["/login_home"]} component={LoginHome}/>
				<PrivateRoute exact path = {["/empleados"]} component = {EmpleadosBuscar} /> 
				<Route exact path={["/"]}  component ={Inicio}/>
				<Route exact path="/*"  component={NotFound}/>
			</Switch>
		</Router>
	);	 
}

const NotFound = () =>{
	return (
		<h1 className='titulo not-found' >404 <br/>
					 Pagina no encontrada <br/>
		{<FaRegSadTear/>}</h1>
	);
}


export default AppRoutes;