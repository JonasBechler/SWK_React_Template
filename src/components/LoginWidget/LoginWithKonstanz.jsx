import React from 'react'
import apiLogin from '../../api_handler/login.js';


export default function LoginWithKonstanz () {
  
    function loginHandlerKonstanz(e){
        
        e.preventDefault();
        
        apiLogin.with_konstanz()
        
    }

    return (
        <div>
            <div className='H_Center'>Or log in with</div>
            
            <div className='Groupbox'>
                
                <div className='H_Center'>
                    <button className='Button Text' id='KonstanzRed' onClick={loginHandlerKonstanz}>Konstanz</button>
                </div>
                
            </div>
        </div>
    )
  
}
