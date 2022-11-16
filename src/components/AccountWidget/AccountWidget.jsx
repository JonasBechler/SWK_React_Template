import React from 'react'
import AccountDetails from '../AccountDetails/AccountDetails'
import apiLogout from '../../api_handler/logout';


export default function AccountWidget({details, user, setPage, config}) {
    
    function loginHandler(e) {

        e.preventDefault();
        setPage(1);

    }

    function logoutHandler(e) {

        e.preventDefault();
        
        apiLogout.logout(config)

    }
    return (
        <div className='H_Center'>
            <div className='Groupbox' style={{"backgroundColor": "#f5f5f5"}}>
                {(user)?(
                    
                    <div>
                        <div className='H_Center'>
                            <div className='Text'>Hello, you are currently logged in as {user.first_name} {user.last_name}.</div>
                        </div>

                        <div className='Spacer'></div>

                        <div className='H_Center'>

                            <AccountDetails details={details} user={user} readOnly={true}></AccountDetails>

                        </div>

                        <div className='Spacer'></div>

                        <div className='H_Center'>
                            <button className="Button Text" onClick={logoutHandler}>Log out</button>
                        </div>
                    </div>

                ):(

                    <div>
                        <div className='Text'>Hello, you are currently NOT logged in.</div>
                        
                        <div className='Spacer'></div>
                        
                        <div className='H_Center'>
                            <button className="Button Text" onClick={loginHandler}>Login or Register</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
        
    )
}
