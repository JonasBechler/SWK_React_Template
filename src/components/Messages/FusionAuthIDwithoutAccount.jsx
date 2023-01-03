import React from 'react'

module.exports = function ( config, setPage, setContent ){
	return function FusionAuthIDwithoutAccount() {

		function onCreateAccountHandler(e) {
			e.preventDefault();
			setContent();
			setPage(2);
		}
		function onConnectAccountHandler(e) {
			e.preventDefault();
			setContent();
			setPage(1);
		}

		return (
			<div className='Column'>
				<div className='H_Center'>
					Es ist kein Account mit diesem Konstanz-Login verbunden.
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
					<button className="Button Text" onClick={onCreateAccountHandler}>Account anlegen</button>
					<button className="Button Text" onClick={onConnectAccountHandler}>bestehender Account verbinden</button>
				</div>

			</div>
		)
	}
}