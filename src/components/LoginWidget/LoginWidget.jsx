import React from 'react'
import LoginWithAccountWidget from './LoginWithAccountWidget';
import LoginWithKonstanz from './LoginWithKonstanz';

export default function LoginWidget({ setPage, config }) {

	return (
		<div className='H_Center'>
			<div className='Groupbox' style={{"backgroundColor": "#f5f5f5"}}>

				<LoginWithAccountWidget setPage={setPage} config={config}></LoginWithAccountWidget>

				<div className='Spacer'></div>

				<LoginWithKonstanz config={config}></LoginWithKonstanz>

			</div>
		</div>

	)
}