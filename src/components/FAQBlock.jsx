import React, {useState} from 'react'


const FAQBlock = ({ questionData, answerData}) => {
	const [showP, setShowP] = useState(false);
	const toggleShowP = () => {
		setShowP(!showP);
	}
	return (
		<div className="faqEntry" onClick={toggleShowP}>
			<h3>{questionData}</h3>
			<p className={showP ? `faqShow` : ''}>{answerData}</p>
		</div>
	)
}

export default FAQBlock;
