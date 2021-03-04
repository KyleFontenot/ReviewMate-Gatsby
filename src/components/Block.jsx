import React from 'react'

const Block = ({children, row, h2}) => {
	return (
		<div className="container">
			{h2 ? <h2 style={{
			}}>
		{h2} </h2> : null}
			<div className={`row ${row}`}>
				{children}
			</div>
		</div>
	)
}

export default Block
