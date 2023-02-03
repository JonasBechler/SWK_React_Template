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
      
                 
        {
          (value.length < 25)?(
            <div className='Row'>
              <div className='Text V_Center' >
                {title}:
              </div>
              <div className='Spacer'></div>                  
              <input className='TextInput AccountInput' type="text" value={value} onChange={e => onChangeHandler(e)} readOnly={readOnly} disabled={false}/>
            </div>
            ):(
            <div className='Column'>
              <div className='Text' >
                {title}:
              </div>
              <input className='TextInput AccountInputLarge' type="text" value={value} onChange={e => onChangeHandler(e)} readOnly={readOnly} disabled={false}/>
            </div>
          )
        }
        
        
      
    </div>
  )
}
