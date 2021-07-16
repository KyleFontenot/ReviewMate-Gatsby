import React, {useState} from 'react'


const FAQBlock = ({ questionData, answer}) => {
	const [showP, setShowP] = useState(false);
	const toggleShowP = () => {
		setShowP(!showP);
	}
	return (
		<div className="faqEntry" onClick={toggleShowP}>
			<h3>{questionData}</h3>
			<div className={showP ? `faqShow` : ''} dangerouslySetInnerHTML={{__html: answer}}></div>
		</div>
	)
}

export default FAQBlock;
