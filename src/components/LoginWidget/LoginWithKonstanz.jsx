import React from 'react'
import apiLogin from '../../api_handler/login.js';


export default function LoginWithKonstanz ({ config }) {
  
    function loginHandlerKonstanz(e){
        
        e.preventDefault();
        
        apiLogin.with_konstanz(config)
        
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
