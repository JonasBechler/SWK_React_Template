import React, { useState } from 'react'
import AccountDetails from '../AccountDetails/AccountDetails'
import apiRegister from '../../api_handler/register';



export default function RegisterWidget({ details, setPage, config }) {
	const blank_user = _ => {
        
		let user = Object.assign({}, details);
		Object.keys(user).forEach(key => {
			user[key] = ""
		});
        return user
    }

	const [user, setUser] = useState(blank_user())
	const [error, setError] = useState(200)


	function onChange(detail){
		let user_temp = Object.assign({}, user);

		user_temp[detail[0]] = detail[1]

		setUser(user_temp)
	}

	const is_valid = user => {

		let valid = true
		Object.values(user).forEach(value => {
			if (value==="") {
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

		apiRegister.with_data(config, user)
			.then(response => {
				if (response.status === 200){
					setPage(0)
				}
				setError(response.status)
			})
	}

    return (
		<div className='H_Center'>
			<div className='Groupbox' style={{"backgroundColor": "#f5f5f5"}}>

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

