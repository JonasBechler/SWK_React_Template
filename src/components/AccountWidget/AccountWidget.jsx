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

                            <AccountDetails details={details} user={user} readOnly={true}></AccountDetails>

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
                        
                        <div className='H_Center'>
                            <button className="Button Text" onClick={loginHandler}>Anmelden oder Registrieren</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
        
    )
}
