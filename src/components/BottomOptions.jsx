import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
	margin: 0 auto;
	width:100%;
	/* width:calc(100% - 4rem); */
	padding: 1rem 0.2rem;
	position: relative;
	display:inline-block;
`
const Row = styled.div`
	display: flex;
	flex-direction:column;
	flex-wrap:wrap;
	padding-top:1rem;
	margin-bottom:1.5rem;
	width: 100%;
	@media(min-width:768px){
		flex-direction:row;
	}
	${Column}{
		margin-bottom: inherit;
		/* display: block;
	  flex: 1 1 auto;
	  margin-left: 0;
	  max-width: 100%; */
	}
`
// Column not used below, but just to avoid Gatsby warning
const Column = styled.div`
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  @media (max-width: 424px) {
    flex: ${props => (props.smWidth ? `0 0 ${props.smWidth}%` : null)};
    max-width: ${props => (props.smWidth ? `${props.smWidth}%` : null)};
  }
  @media (min-width: 425px) {
    flex: ${props => (props.mdWidth ? `0 0 ${props.mdWidth}%` : null)};
    max-width: ${props => (props.mdWidth ? `${props.mdWidth}%` : null)};
  }
  @media (min-width: 768px) {
    flex: ${props => (props.lgWidth ? `0 0 ${props.lgWidth}%` : null)};
    max-width: ${props => (props.lgWidth ? `${props.lgWidth}%` : null)};
  }
`

const BottomOptions = ({children, row}) => {
		return (
			<Container role="navigation" aria-label="Suggested pages"
			  >
				<Row
				style={{
				justifyContent:"space-around",
				padding:"0 1rem"
			}}>
			{/* in the children input, use Column components */}
					{children}
				</Row>
			</Container>
		)
}

export default BottomOptions
