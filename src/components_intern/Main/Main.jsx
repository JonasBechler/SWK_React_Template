import React, { useState } from 'react'

import Header from "../Header/Header";
import RegisterWidget from "../../components_basics/RegisterWidget/RegisterWidget";
import AccountWidget from '../AccountWidget/AccountWidget';
import Message from '../../components_basics/Messages/Message';
import Messages from '../../components_basics/Messages/Messages';



export default function Main({name, icon, config}) {
	const server_requests = require('../../server_handler/server_requests')(config)

    const [page, setPage] = useState(0);

	const [details, setDetails] = useState();
	const [user, setUser] = useState();
	const [templateUser, setTemplateUser] = useState();
	const [messageContent, setMessageContent] = useState();

	const messages = Messages(config, setPage, setMessageContent)

	//used when page change to 0
	React.useEffect(() => {
		if (page === 0)
		{		
			//fetch user
			server_requests.user()
				.then(response => {
					//check if is empty
					let response_keys = Object.keys(response)
					if (response_keys.length === 0) {
						// should not happen
						console.log(messages.NoServerConnection);
						setMessageContent(messages.NoServerConnection)
						return
					}

					else if (response_keys.includes("user")){
						setDetails(response.details);
						setUser(response.user);	

					}

					else if (response_keys.includes("fusionauth_user")){
						setDetails(response.details);
						setTemplateUser(response.fusionauth_user);	
						setMessageContent(messages.FusionAuthIDwithoutAccount)
					}

					else if (response_keys.includes("blank_user")){
						setDetails(response.details);
						setTemplateUser(response.blank_user);	
					}

				})
				.catch(error => {
					setMessageContent(messages.NoServerConnection)
					return
				})
		}
	}, [page]);

	const get_page_content = _ => {
		if (details){
			
			if (page === 0){
				return <AccountWidget className='Main_Item' details={details} user={user} setPage={setPage} config={config}></AccountWidget>
			}
			else if (page === 2){
				return <RegisterWidget className='Main_Item' details={details} templateUser={templateUser} setPage={setPage} config={config}></RegisterWidget>
			}
			
		}
		
	}

	return (

		<div className='Fill Column'>
			<Message content={messageContent} setContent={setMessageContent}></Message>

			<Header name={name} icon={icon} setPage={setPage}></Header>

			<div className='Spacer'></div>

			{
				get_page_content()
			}

			<div className='Spacer'></div>
			<div className='Spacer'></div>

		</div>

	);
}
