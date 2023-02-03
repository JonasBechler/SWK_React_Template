import React from 'react'

export default function Message({ content, setContent }) {


	// dismiss
	function onClickHandler(e) {
        e.preventDefault();
		setContent();
    }

    
    if(content){
        return (
            
            <div id='message'>
                <div className='Spacer'></div>
                <div className='Spacer'></div>
                <div className='Column Groupbox' style={{"margin":"30px", "padding":"20px"}}>

                    {content}
                    
                    <div className='Spacer'></div>

                    <div className='H_Center'>
                        <button className="Button Text" onClick={onClickHandler}>schließen</button>
                    </div>
                </div>
    
            </div>
        )
    }
    else{
        return (
            <div>

            </div>
        )
    }

}
