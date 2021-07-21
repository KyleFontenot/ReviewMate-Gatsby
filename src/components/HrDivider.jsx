import React from 'react'
import styled from "@emotion/styled"

const maroon = '#9a2a24';

const StylizedHr = styled.div`
	content: "";
	height: 4px;
	width:100%;
	max-width:60rem;
	background: linear-gradient(to right, #A43F39, #6B1D09);
	background-color: #9a2a24;
	position:relative;
	margin: 0.2rem auto 0.2rem;
`

const HrDivider = () => {
		return (
			<StylizedHr></StylizedHr>
		)
}

export default HrDivider
