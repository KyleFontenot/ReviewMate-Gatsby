import React, {useRef, useState} from "react"
// import Block from "../Block.jsx"
import NumberFormat from 'react-number-format';
// NumberFormat inputs
import "./FormBlock.scss"

const FormBlock = () => {
  const emailField = useRef();
  const errorRef = useRef();
  const [errorMessage, seterrorMessage] = useState('');
  // let validForm = true;


function checkForm(e) {
  e.preventDefault();
  console.log('test');
  let validForm = true;
  try {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailField.current.value)){
      emailField.current.classList.add('error');
      emailField.current.focus();
      throw "The email address doesn't seem right."
    }
  }
  catch (err){
    validForm = false;
    seterrorMessage(err);
    console.log(err);
  }
  if (validForm) {
    emailField.current.classList.remove('error');
    document.getElementsByTagName('form')[0].submit();
  }
}
//
// useEffect(() => {
//   errorRef
// }, [errorMessage]);

  return (
    <div className="container" >
			<div className="row">
				<div className="column formColumn">
	        <h2>Contact Us</h2>

	        <form
	          name="contact"
	          method="POST"
	          data-netlify="true"
	          data-netlify-honeypot="bot-field"
            formNoValidate
            noValidate
            action="/submitted"
	        >
            <input type="hidden" name="bot-field" id="formbotfield" />
	          <input type="hidden" name="form-name" value="contact" />

						<label htmlFor="name">Name:</label>
	          <input type="text" name="Name" placeholder="Name" id="nameField" required/>

            <label htmlFor="emailField">Email:</label>
	          <input type="email" ref={emailField} name="Email" placeholder="email@email.com" id="emailField" className="" required />
            <label htmlFor="emailField">Phone (Optional):</label>
            <NumberFormat format="+1 (###) ###-####" mask="_" type="tel" name="Phone" placeholder="+1 (123) 867-5309" id="phoneField"/>

            <label htmlFor="entityField">Entity:</label>
	          <input type="text" name="Entity" placeholder="Company" id="entityField" />

            <label htmlFor="commentField">Comments:</label>
	          <input type="textarea" rows={2} cols={10} name="Info" id="commentField" />
            <div id="errorMessage" ref={errorRef}>{errorMessage}</div>
	          <button type="button" onClick={checkForm} style={{
                margin:'1.75rem auto',
                textAlign:'center'
              }}>Send</button>
	        </form>
	      </div>
			</div>
    </div>

  )
}

export default FormBlock
