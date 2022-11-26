import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { request } from '../helper/helper';
import './empleados.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{
	PaginationProvider,
	PaginationListStandalone,
	SizePerPageDropdownStandalone} from 'react-bootstrap-table2-paginator';


const products = [
	{
		id: 1,
		name: "Monitor",
		price: 1000,
	},
	{
		id: 2,
		name: "Mouse",
		price: 1000,
	},
	{
		id: 3,
		name: "value",
		price: 1000,
	},
	{
		id: 4,
		name: "jum",
		price: 1000,
	},
	{
		id: 5,
		name: "na",
		price: 1000,
	},
 ];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];


export default class EmpleadosBuscar extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		request
		.get("/empleados")
		.then((response) =>{
			console.log(response.data)
		})
		.catch((error) =>{
			console.log(error)
		})
	}
	render(){
		const options = {
			custom : true,
			totalSize: products.length
		}
		return(
			<Container id="empleados-buscar-container">
				<Row>
				<h1>Empleados</h1>
				</Row>
				<Row>
				<PaginationProvider pagination={paginationFactory(options)}>
				{({paginationProps, paginationTableProps}) => (
					<div>
						<Row>
							<Col>
								<SizePerPageDropdownStandalone {...paginationProps} />
							</Col>
							<Col></Col>
						</Row>
						<BootstrapTable
						keyField='id'
						data={products}
						columns={columns}
						{...paginationTableProps}
						/>
						<PaginationListStandalone {...paginationProps} />
					</div>
				)}
				</PaginationProvider>
				</Row>
			</Container>
		)
	}
}

