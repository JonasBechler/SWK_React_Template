import React, { useState } from 'react'


export default function LoginWithAccountWidget ({ setPage, config }) {

	const server_requests = require('../../server_handler/server_requests')(config)

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

		server_requests.login.with_credentials(email, password)
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
			<div className='H_Center Groupbox_Head'>Anmelden</div>
			
			<div className='Groupbox'>
				{(error === 200)?(
					<div></div>
				) : (
					<div className='H_Center ErrorMessage'>
						Benutzername oder Password falsch
					</div>
				)}
				
				<form className='Column' onSubmit={loginHandler}>
					<div className='H_Center'>
						<input className='TextInput LoginInput' type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}></input>
					</div>	
					<div className='H_Center'>
						<input className='TextInput LoginInput' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
					</div>
					
					<div className='Spacer'></div>

					<div className='H_Center'>
						<button className="Button Text">einloggen</button>
					</div>
					
				</form>

				<div className='H_Center'>
                    <button className='Link' onClick={showRegisterHandler}>oder Registrieren?</button>
                </div>
			</div>
		</div>
	)
	
}
