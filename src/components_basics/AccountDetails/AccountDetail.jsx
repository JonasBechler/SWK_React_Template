import React, { useState } from 'react'

export default function AccountDetail({name, title, user, onChange, readOnly}) {

  const [value, setValue] = useState(user[name])

  function onChangeHandler(e) {
    setValue(e.target.value)
    onChange([name, e.target.value])
  }

  React.useEffect(() => {
		setValue(user[name])
	}, [user]);

  return (
    <div>
      <div className='Row'>
        <div className='Text V_Center' >
          {title}:
        </div>
        
        <div className='Spacer'></div> 
         
        {
          (value.length < 25)?(
            <input className='TextInput AccountInput' type="text" value={value} onChange={e => onChangeHandler(e)} readOnly={readOnly} disabled={false}/>
          ):(
            <input className='TextInput AccountInput TextSmall' type="text" value={value} onChange={e => onChangeHandler(e)} readOnly={readOnly} disabled={false}/>
          )
        }
        
      </div>
    </div>
  )
}
