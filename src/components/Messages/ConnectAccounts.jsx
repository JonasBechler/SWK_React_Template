import React from 'react'

module.exports = function ( config, setPage, setContent ){
	const server_requests = require('../../server_handler/server_requests')(config)

	return function ConnectAccounts() {

		function onConnectAccountsHandler(e) {
			e.preventDefault();
			
			setContent();
			server_requests.connect()
		}
			
			
		

		return (
			<div className='Column'>
				<div className='H_Center'>
					Möchten Sie diese Accounts verbinden?
				</div>

				<div className='Spacer'></div>

				<div className='H_Center'>
					Legen Sie einen neuen Account an
				</div>
				<div className='H_Center'>
					oder verbinden Sie einen bestehenden Account.
				</div>

				<div className='Spacer'></div>

				<div className='H_Center'>
					Passwort löschen bei verbinden?
				</div>

				<div className='Spacer'></div>

				<div className='H_Center'>
					<button className="Button Text" onClick={onConnectAccountsHandler}>Accounts verbinden</button>
				</div>

			</div>
		)
	}
}