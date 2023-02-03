import React, { useState } from 'react'
import AccountDetails from '../AccountDetails/AccountDetails'



export default function RegisterWidget({ details, templateUser, setPage, config }) {

	const server_requests = require('../../server_handler/server_requests')(config)

	const [user, setUser] = useState(Object.assign({}, templateUser))
	const [error, setError] = useState(200)

	function onChange(detail){
		let user_temp = Object.assign({}, user);

		user_temp[detail[0]] = detail[1]

		setUser(user_temp)
	}

	const is_valid = user => {

		let valid = true
		Object.keys(user).forEach(key => {
			if (key==="fusionauth_id"){
				return;
			}
			if (key==="account_id"){
				return;
			}
			if (user[key]==="") {
				valid = false
			}
		})
		return valid

	}

	function registerHandler(e){

		e.preventDefault();

		if(!is_valid(user)){
			setError(-1)
			return
		}

		server_requests.register(user)
			.then(response => {
				if (response.status === 200){
					setPage(0)
				}
				setError(response.status)
			})
	}

    return (
		<div className='H_Center'>
			<div className='Groupbox Main_Item' style={{"backgroundColor": "#f5f5f5"}}>
				<div className='H_Center Text' style={{"fontSize":"20px"}}>Bitte geben Sie Ihre Daten ein</div>

				{(error === 200)?(
					<div></div>
				) : (
					<div className='Column ErrorMessage'>
						<div className='H_Center'>Nicht alle Informationen eingegeben </div>
						<div className='H_Center'>oder E-Mail schon verwendet.</div>
					</div>
				)}

				<AccountDetails details={details} user={user} onChange={onChange} readOnly={false}></AccountDetails>

				<div className='Spacer'></div>

				<div className='H_Center'>
                    <button className='Button Text' onClick={registerHandler}>Registrieren</button>
                </div>

			</div>
		</div>

	)
}

