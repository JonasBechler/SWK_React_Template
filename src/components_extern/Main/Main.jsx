import React, { useState } from 'react'

import Header from "../../components_basics/Header/Header";

import Message from '../../components_basics/Messages/Message';
import Messages from '../../components_basics/Messages/Messages';
import UsingView from '../UsingView/UsingView';



export default function Main({name, icon, mainview, config}) {
	const server_requests = require('../../server_handler/server_requests')(config)

	const [showBackground, setShowBackground] = useState(true);
    const [page, setPage] = useState(0);

	const [details, setDetails] = useState();
	const [user, setUser] = useState();
	const [fusionAuth_data, setFusionAuth_data] = useState();

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
					console.log(response);
					if (response_keys.length === 0) {
						// should not happen
						console.log(messages.NoServerConnection);
						setMessageContent(messages.NoServerConnection)
						return
					}

					else if (response_keys.includes("user") && response_keys.includes("fusionauth_user")){
						setDetails(response.details);
						setUser(response.user);
						setMessageContent(messages.ConnectAccounts)
					}

					else if (response_keys.includes("user")){
						setDetails(response.details);
						setUser(response.user);	

						if (response.user.fusionauth_id === ""){
							setMessageContent(messages.AccountwithoutFusionAuthID)
						}
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

					if (response_keys.includes("fusionAuth_data")){
						setFusionAuth_data(response.fusionAuth_data);
					}

					else{
						setFusionAuth_data();
					}

				})
				.catch(error => {
					setMessageContent(messages.NoServerConnection)
					return
				})
		}
	}, [page]);

	

	return (

		<div className='Fill Column'>
			<Message content={messageContent} setContent={setMessageContent}></Message>

			<Header name={name} icon={icon} page={page} setPage={setPage} showBackground={showBackground} setShowBackground={setShowBackground} isExtern={true}></Header>

			<UsingView 
				mainview={mainview} 
				page={page} 
				setPage={setPage} 
				showBackground={showBackground}
				setShowBackground={setShowBackground}
				details={details} 
				user={user} 
				fusionAuth_data={fusionAuth_data} 
				templateUser={templateUser} 
				config={config}>

			</UsingView>

			<div className='Spacer'></div>

		</div>

	);
}

