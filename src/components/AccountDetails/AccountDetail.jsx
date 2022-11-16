import React, { useState } from 'react'

export default function AccountDetail({name, title, initial_value, onChange, readOnly}) {

  const [value, setValue] = useState(initial_value)

  function onChangeHandler(e) {
    setValue(e.target.value)
    onChange([name, e.target.value])
  }

  return (
    <div>
      <div className='Row'>
        <div className='Text V_Center' >
          {title}:
        </div>
        
        <div className='Spacer'></div>  
        <input className='Text TextInput' type="text" value={value} onChange={e => onChangeHandler(e)} readOnly={readOnly} disabled={false}/>
         
        
      </div>
    </div>
  )
}
