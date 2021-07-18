import React from 'react'

const Card = ({children, white, shadow, margin}) => {

	if (white){
		return (
			<div className={`card ${white ? 'card--white': ''}`}
			style={{
				margin: `${margin}!important`
			}}>
			<div className="card__inset" />
				{children}
			</div>
		)
	}
	else if (shadow){
		return (
			<div className='card card--shadow'
			style={{
				margin: `${margin}!important`
			}}>

				{children}
			</div>
		)
	}
	return (
		<div className={`card ${white ? 'card--white': ''}`}
		style={{
			margin: `${margin}!important`
		}}>
			{children}
		</div>
	)
}

export default Card
