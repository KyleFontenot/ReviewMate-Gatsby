// import React from 'react'
export function sanitizeSlug(input) {
	const specialCharacterRegex = /[^a-zA-Z0-9\s]/g;
	let slugArr = input.split('')
	let trimmed = [];
		for(let i = 0; i < slugArr.length; i++){
			if(specialCharacterRegex.test(slugArr[i])){
				if(slugArr[i - 1] === " "){
					trimmed.pop()
				}
				break
			}
			else {
				trimmed.push(slugArr[i].toLowerCase())
		}
	}
	const slug = trimmed.join('').replace(' ', '-');

	return slug;
}
export default sanitizeSlug
