import React from 'react'




const Block = ({children, row, h2}) => {
	return (
		<section className="container">
			{h2 ? <h2 style={{
			}} className="uheader">
		{h2} </h2> : null}
			<div className={`row row--${row}`}>
				{children}
			</div>
		</section>
	)
}

export default Block
