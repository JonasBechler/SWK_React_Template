import React from 'react'
import AccountDetail from './AccountDetail'


export default function AccountDetails({title, details, user, onChange, readOnly}) {
    
    return (
        <div className='Column Groupbox'>
            
            <div className='H_Center Text' style={{"fontSize":"15px"}}>{title?(title):("accountspezifische Daten")}</div>

            {Object.entries(details).map(detail => {
                if (detail[0] === "password" && readOnly){return <div key={detail[0]}></div>}
                else if (detail[0] === "fusionauth_id" && !readOnly){return <div key={detail[0]}></div>}
                else if (detail[0] === "uuid" && !readOnly){return <div key={detail[0]}></div>}

                return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} initial_value={user[detail[0]]} onChange={onChange} readOnly={readOnly}></AccountDetail>
            })}
            
        </div>
    )
}

