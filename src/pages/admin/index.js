import * as React from 'react'
import {useEffect} from 'react'
import CMS from 'netlify-cms-app'

 const Admin = () => {
	 useEffect(() => {
		 CMS.init()
	 	CMS.registerPreviewTemplate('my-template', MyTemplate)
	 },[])


	return (
		<div/>
	)
}
export default Admin
