import React from 'react'

const Card = ({source,name,price}) =>  {
  return (
	<div>
		<h1>
			{name}
		</h1>
		<img
			className="d-block w-100 mouse"
              src={source}
              alt="First slide"
		/>
		<p>
			{price}
		</p>
	</div>
  )
}

export default Card