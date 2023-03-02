import React from 'react'

export default function Header({ name, icon, page, setPage, showBackground, setShowBackground, isExtern}) {

	const user_icon = require("./user_icon.png")

	// go to main page
	function onClickHandler(e) {
        e.preventDefault();
		if (setPage === undefined){
			return
		}
		else {
			setShowBackground(true)	
			setPage(0)
		}

    }

	// go to account page
	function onAccountClickHandler(e) {
        e.preventDefault();
		if (setPage === undefined){
			return
		}
		else{
			setShowBackground(false)
		}
    }

	const className = () => {
		if (isExtern){
			return 'ServiceColor Row H_Center'
		}
		else{
			return 'KonstanzRed Row H_Center'
		}
	}
	return (
		<div className={className()} >
			<div className='Spacer'></div>

			<div className='V_Center H_Center' style={{"padding":"10px"}} onClick={onClickHandler}>
				<img width={75} height={75} src={icon} alt="Icon" ></img>
			</div>
			
			<div className='Text V_Center' style={{ "fontSize": "40px" }} onClick={onClickHandler}>
				{name}
			</div>

			<div className='Spacer'></div>

			{(setPage === undefined)?(
			<></>
			):(
			<>
				<div className='V_Center' onClick={onAccountClickHandler}>
					<div style={{"backgroundColor":"white", "borderRadius": "10px", "padding": "5px"}}>
						<img className="H_Center" src={user_icon} alt="Logo" style={{"width":"50px", "height":"50px"}} />
					</div>
					
				</div>

				<div className='Spacer'></div>
			</>
			)}

			
		</div>
	)
}
