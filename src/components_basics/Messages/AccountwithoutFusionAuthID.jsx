import React from 'react'


export default function AccountwithoutFusionAuthID( config, setPage, setContent ) {

	const server_requests = require('../../server_handler/server_requests')(config)

	function loginHandlerKonstanz(e) {
        e.preventDefault();
		setContent();
		server_requests.login.with_konstanz()
	}

	return (
		<div className='Column'>

			<div className='H_Center'>
				Wir stellen um auf das allgemeine Konstanz-Login.
			</div>

			<div className='Spacer'></div>

			<div className='H_Center'>
				Verbinden Sie diesen Account mit Ihrem Konstanz-Login
			</div>
			<div className='H_Center'>
				oder erstellen Sie einen Konstanz-Login-Account
			</div>
			
			<div className='Spacer'></div>


			<div className='H_Center'>
				<button className='Button Text' id='KonstanzRed' onClick={loginHandlerKonstanz}>Konstanz-Login verbinden</button>
            </div>

		</div>
	)
}