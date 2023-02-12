import React from 'react'
import AccountDetails from '../../components_basics/AccountDetails/AccountDetails'
import LoginWithKonstanz from '../../components_basics/LoginWidget/LoginWithKonstanz';




export default function AccountWidget({title, details, user, setPage, config, fusionAuth_data}) {

    const server_requests = require('../../server_handler/server_requests')(config)


    function logoutHandler(e) {

        e.preventDefault();
        
        server_requests.logout()

    }


    return (
        <div className='H_Center '>
            <div className='Groupbox Main_Item' style={{"backgroundColor": "#f5f5f5"}}>
                {(user)?(
                    
                    <div>
                        {user.first_name?(
                            <div className='H_Center'>
                                <div className='Text' style={{"fontSize":"15px"}}>Hallo, {user.first_name} {user.last_name}.</div>
                            </div>
                        ):(
                            <div className='H_Center'>
                                <div className='Text'>Hallo, {user.email}.</div>
                            </div>
                        )}
                        

                        <div className='Spacer'></div>

                        <div className='H_Center'>
                            
                            <AccountDetails title={title} details={details} user={user} readOnly={true} fusionAuth_data={fusionAuth_data}></AccountDetails>

                        </div>

                        

                        <div className='Spacer'></div>

                        <div className='H_Center'>
                            <button className="Button Text" onClick={logoutHandler}>Abmelden</button>
                        </div>

                        

                    </div>

                ):(

                    <div>
                        <div className='Spacer'></div>
                        <div className='Text H_Center'>Hallo, melden Sie sich hier an.</div>
                        
                        <div className='Spacer'></div>
                        <div className='Spacer'></div>
                        <div className='Spacer'></div>
                        
                        <LoginWithKonstanz config={config}></LoginWithKonstanz>
                    </div>

                )}
            </div>
        </div>
        
    )
}
