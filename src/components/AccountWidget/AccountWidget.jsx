import React from 'react'
import AccountDetails from '../AccountDetails/AccountDetails'




export default function AccountWidget({title, details, user, setPage, config}) {

    const server_requests = require('../../server_handler/server_requests')(config)

    
    function loginHandler(e) {

        e.preventDefault();
        setPage(1);

    }

    function logoutHandler(e) {

        e.preventDefault();
        
        server_requests.logout()

    }

    function connectKonstanzHandler(e) {

        e.preventDefault();
        
        server_requests.login.with_konstanz()

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

                            <AccountDetails title={title} details={details} user={user} readOnly={true}></AccountDetails>

                        </div>

                        
                        {user.knlogin_id?(
                            <div></div>
                        ):(
                            <div className='H_Center'>
                                <button className='Button Text' id='KonstanzRed' onClick={connectKonstanzHandler}>Konstanz-Login verbinden</button>
                            </div>
                        )}

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
                        
                        <div className='H_Center'>
                            <button className="Button Text" onClick={loginHandler}>Anmelden oder Registrieren</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
        
    )
}
