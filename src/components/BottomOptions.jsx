import React from 'react'


const BottomOptions = ({children, row}) => {
		return (
			<div role="navigation" aria-label="Suggested pages" className="container"
			  >
				<div className="row row--row"
				style={{
				justifyContent:"space-around"
			}}>
					{children}
				</div>
			</div>
		)
}

export default BottomOptions
