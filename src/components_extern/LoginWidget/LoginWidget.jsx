import React from 'react'
import LoginWithAccountWidget from '../../components_basics/LoginWidget/LoginWithAccountWidget';
import LoginWithKonstanz from '../../components_basics/LoginWidget/LoginWithKonstanz';

export default function LoginWidget({ setPage, config }) {

	return (
		<div className='H_Center'>
			<div className='Groupbox Main_Item' style={{"backgroundColor": "#f5f5f5"}}>

				<LoginWithAccountWidget setPage={setPage} config={config}></LoginWithAccountWidget>

				<div className='Spacer'></div>

				<LoginWithKonstanz config={config}></LoginWithKonstanz>

			</div>
		</div>

	)
}