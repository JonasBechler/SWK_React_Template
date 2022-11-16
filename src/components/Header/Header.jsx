import React from 'react'

export default function Header({ name, icon, setPage }) {

	// go to main page
	function onClickHandler(e) {
        e.preventDefault();
        setPage(0);
    }

	return (
		<div className='KonstanzRed Row H_Center' onClick={onClickHandler}>

			<div className='V_Center H_Center' style={{ "fontSize": "60px" }}>
				<img src={icon} alt="Icon" ></img>
			</div>
			
			<div className='Text V_Center' style={{ "fontSize": "60px" }}>
				{name}
			</div>

		</div>
	)
}
