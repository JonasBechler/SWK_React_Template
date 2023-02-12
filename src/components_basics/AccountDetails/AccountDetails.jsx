import React, { useState } from 'react'
import AccountDetail from './AccountDetail'


export default function AccountDetails({title, details, user, onChange, readOnly, fusionAuth_data}) {
    const [show_FA, setShow_FA] = useState(false)

    const register = () => {
        return (
            <div className='Column Groupbox'>
            
                {Object.entries(details).map(detail => {
                    if (detail[0] === "knlogin_id"){return <div key={detail[0]}></div>}
                    else if (detail[0] === "account_id"){return <div key={detail[0]}></div>}
    
                    return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} user={user} onChange={onChange} readOnly={readOnly}></AccountDetail>
                })}
                
            </div>
        )
    }

    const show_data_FAonly = () => {
        return (
            <div className='Column Groupbox'>
                
                <div className='H_Center Text' style={{"fontSize":"15px"}}>{title}</div>
                
                <div className='Spacer'></div>
    
    
                {Object.entries(details).map(detail => {
                    if (detail[0] === "password"){return <div key={detail[0]}></div>}
   
                    return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} user={user} onChange={onChange} readOnly={readOnly}></AccountDetail>
                })}
                
            </div>
        )
    }

    const show_data_DienstOnly = () => {
        return (
            <div className='Column Groupbox'>
                
                <div className='H_Center Text' style={{"fontSize":"15px"}}>Daten des Dienstes</div>

                <div className='Spacer'></div>
    
    
                {Object.entries(details).map(detail => {
                    if (detail[0] === "password"){return <div key={detail[0]}></div>}
   
                    return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} user={user} onChange={onChange} readOnly={readOnly}></AccountDetail>
                })}
                
            </div>
        )
    }

    const show_data = () => {
        return (
            <div className='Column Groupbox'>
                
                {show_FA?(
                    <div className='Row'>
                        <div className='V_Center Text' style={{"fontSize":"15px"}}>Daten von FusionAuth</div>
                        <div className='Spacer'></div>
                        <button className='V_Center Text' onClick = {() => setShow_FA(false)}>zeige Dienst</button>
                    </div>
                ):(
                    <div className='Row'>
                        <div className='V_Center Text' style={{"fontSize":"15px"}}>Daten des Dienstes</div>
                        <div className='Spacer'></div>
                        <button className='V_Center Text' onClick = {() => setShow_FA(true)}>zeige FusionAuth</button>
                    </div>
                    
                )}
                    

                
                <div className='Spacer'></div>
    
    
                {
                    createAccountDetails()
                }
                
            </div>
        )
    }

    const createAccountDetails = () => {
        if (show_FA){
            return Object.entries(fusionAuth_data.details).map(detail => {
                if (detail[0] === "password"){return <div key={detail[0]}></div>}
                return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} user={fusionAuth_data.user} onChange={onChange} readOnly={readOnly}></AccountDetail>
            })
        }
        else{
            return Object.entries(details).map(detail => {
                if (detail[0] === "password"){return <div key={detail[0]}></div>}
                return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} user={user} onChange={onChange} readOnly={readOnly}></AccountDetail>
            })        
        }
    }

    if (readOnly){
        if (title === "FusionAuth Daten"){
            return show_data_FAonly();
        }
        else{
            if(fusionAuth_data){
                return show_data();
            }
            else{
                return show_data_DienstOnly();
            }
            
        }

    }
    else{
        return register();
    }
    
}

