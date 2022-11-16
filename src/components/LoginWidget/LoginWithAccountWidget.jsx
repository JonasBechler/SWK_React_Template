import React, { useState } from 'react'
import apiLogin from '../../api_handler/login';


export default function LoginWithAccountWidget ({ setPage, config }) {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [error, setError] = useState(200)

	function loginHandler(e){

		e.preventDefault();
		if ((email === "") || (password === "")) {
			setError(-1)
			return
		}
		setEmail("");
		setPassword("");

		apiLogin.with_credentials(config, email, password)
		.then(response => {
			if (response.status === 200){
				setPage(0)

			}
			setError(response.status)	
		})
		
	}

	function showRegisterHandler(e){

		e.preventDefault();
		setPage(2)
		
	}
	
	return (
		<div>
			<div className='H_Center'>Log in with account</div>
			
			<div className='Groupbox'>
				{(error === 200)?(
					<div></div>
				) : (
					<div className='H_Center ErrorMessage'>
						Benutzername oder Password falsch
					</div>
				)}
				
				<form className='Column' onSubmit={loginHandler}>

					<input type="text" className='TextInput' placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}></input>
					<input type="password" className='TextInput' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>

					<div className='Spacer'></div>

					<div className='H_Center'>
						<button className="Button Text">Login</button>
					</div>
					
				</form>

				<div className='H_Center'>
                    <button className='Link' onClick={showRegisterHandler}>or register</button>
                </div>
			</div>
		</div>
	)
	
}
