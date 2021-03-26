import React from 'react'

const CascadeBlock = ({children, plain}) => {
	return (
		<div className={`container cascadeBlock ${plain ? "cascadeBlock--plain" : null}`}>
			<div className="row">
			{children}
		</div>
	</div>
	)
}

export default CascadeBlock
