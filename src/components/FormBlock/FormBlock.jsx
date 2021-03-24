import React from "react"
// import Block from "../Block.jsx"
import "./FormBlock.scss"

const FormBlock = () => {
  return (
    <div className="container" id="formBlockBackground">
			<div className="row">
				<div className="column formColumn">
	        <h2>Contact Us</h2>
	        <form
	          name="contact"
	          method="post"
	          data-netlify="true"
	          data-netlify-honeypot="bot-field"
	        >
	          {/* You still need to add the hidden input with the form name to your JSX form */}

	          <input type="hidden" name="contact" value="contact" />
						<label htmlFor="name">Name:</label>
	          <input type="text" name="name" placeholder="Name" id="nameField" /> <br />

            <label htmlFor="emailField">Email:</label>
	          <input type="email" name="email" placeholder="email@email.com" id="emailField" /> <br />

            <label htmlFor="entityField">Entity:</label>
	          <input type="text" name="entity" placeholder="Company" id="entityField" /> <br />

            <label htmlFor="commentField">Comments:</label>
	          <input type="textarea" rows="2" cols="40" name="commentField"  id="commentField" /> <br />

	          <input type="submit"  />
	        </form>
	      </div>
			</div>
    </div>

  )
}

export default FormBlock
// function encode(data) {
// 	return Object.keys(data)
// 		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
// 		.join("&")
// }
//
// const handleSubmit = event => {
// 	event.preventDefault()
// 	fetch("/", {
// 		method: "POST",
// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
// 		body: encode({
// 			"form-name": event.target.getAttribute("name"),
// 			...name,
// 		}),
// 	})
// 		.then(() => console.log("Success"))
// 		.catch(error => alert(error))
// }
