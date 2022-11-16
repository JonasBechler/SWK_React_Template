import React from 'react'

export default function Header({ name, icon, setPage }) {

	// go to main page
	function onClickHandler(e) {
        e.preventDefault();
        setPage(0);
    }

	return (
		<div className='KonstanzRed Row H_Center' onClick={onClickHandler}>

			<img src={icon} alt="Bicycle" ></img>
			<div className='Text V_Center' style={{ "fontSize": "60px" }}>
				{name}
			</div>

		</div>
	)
}
