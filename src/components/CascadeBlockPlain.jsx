import React from 'react'

const CascadeBlockPlain = ({children}) => {
	return (
		<div className="container cascadeBlock cascadeBlock--plain">
			<div className="row">
			  {children}
			</div>
		</div>
	)
}

export default CascadeBlockPlain
