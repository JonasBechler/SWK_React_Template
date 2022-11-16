import React from 'react'
import LoginWithAccountWidget from './LoginWithAccountWidget';
import LoginWithKonstanz from './LoginWithKonstanz';

export default function LoginWidget({ setPage }) {

	return (
		<div className='H_Center'>
			<div className='Groupbox' style={{"backgroundColor": "#f5f5f5"}}>

				<LoginWithAccountWidget setPage={setPage} ></LoginWithAccountWidget>

				<div className='Spacer'></div>

				<LoginWithKonstanz></LoginWithKonstanz>

			</div>
		</div>

	)
}