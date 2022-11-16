import React, { useState } from 'react'

import config from "../../../config.json"
import Header from "./components/Header/Header";
import LoginWidget from "./components/LoginWidget/LoginWidget";
import RegisterWidget from "./components/ReqisterWidget/RegisterWidget";
import AccountWidget from './components/AccountWidget/AccountWidget';
import './App.css'

function App() {
	const [page, setPage] = useState(0);

	const [details, setDetails] = useState();
	const [user, setUser] = useState();

	//used when page change to 0
	React.useEffect(() => {
		if (page === 0)
		{		
			//fetch user
			fetch(`${config.device_ip}:${config.konrad_port}/api/user`, {
				// fetch won't send cookies unless you set credentials
				credentials: 'include'
			})
				.then(response => response.json())
				.then(response => {
					//check if is empty
					let response_lenght = Object.keys(response).length

					if (response_lenght === 0) {
						// should not happen
						return
					}

					else if (response_lenght === 1){
						setDetails(response.details);
					}

					else if (response_lenght === 2){
						setDetails(response.details);
						setUser(response.user);	
					}

				});
		}
	}, [page]);

	const get_page_content = _ => {
		if (details){
			if (page === 0){
				return <AccountWidget details={details} user={user} setPage={setPage}></AccountWidget>
			}
			else if (page === 1){
				return <LoginWidget setPage={setPage}></LoginWidget>
			}
			else if (page === 2){
				return <RegisterWidget details={details} setPage={setPage}></RegisterWidget>
			}
		}
	}

	return (

		<div className='Fill Column'>

			<Header setPage={setPage}></Header>

			<div className='Spacer'></div>

			{
				get_page_content()
			}

			<div className='Spacer'></div>
			<div className='Spacer'></div>

		</div>

	);
}

export default App;
