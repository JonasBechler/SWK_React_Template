import React from 'react'
import AccountDetail from './AccountDetail'


export default function AccountDetails({details, user, onChange, readOnly}) {
    
    return (
        <div className='Column Groupbox'>
            
            <div className='H_Center Text' style={{"fontSize":"20px"}}>Account Details</div>

            {Object.entries(details).map(detail => {
                if (detail[0] === "password" && readOnly){return <div key={"password"}></div>}
                return <AccountDetail key={detail[0]} name={detail[0]} title={detail[1]} initial_value={user[detail[0]]} onChange={onChange} readOnly={readOnly}></AccountDetail>
            })}
            
        </div>
    )
}

