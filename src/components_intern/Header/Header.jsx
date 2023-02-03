import React from 'react'

export default function Header({ name, icon, setPage }) {

	// go to main page
	function onClickHandler(e) {
        e.preventDefault();
		if (setPage === undefined){
			return
		}
        setPage(0);
    }

	return (
		<div className='KonstanzRed Row H_Center' onClick={onClickHandler}>

			<div className='V_Center H_Center' style={{"padding":"10px"}}>
				<img width={75} height={75} src={icon} alt="Icon" ></img>
			</div>
			
			<div className='Text V_Center' style={{ "fontSize": "40px" }}>
				{name}
			</div>

		</div>
	)
}
