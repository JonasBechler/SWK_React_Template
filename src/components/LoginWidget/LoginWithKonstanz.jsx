import React from 'react'



export default function LoginWithKonstanz ({ config }) {

    const server_requests = require('../../server_handler/server_requests')(config)
  
    function loginHandlerKonstanz(e){
        
        e.preventDefault();
        
        server_requests.login.with_konstanz()
        
    }

    return (
        <div>
            <div className='H_Center Groupbox_Head'>Oder anmelden mit</div>
            
            <div className='Groupbox'>
                <div className='Spacer'></div>

                <div className='H_Center'>
                    <button className='Button Text' id='KonstanzRed' onClick={loginHandlerKonstanz}>Konstanz</button>
                </div>
                <div className='Spacer'></div>

            </div>
        </div>
    )
  
}
