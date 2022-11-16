import React from 'react'
//import image from './Icon/Bicycle.png'

export default function Header({ setPage }) {

	// go to main page
	function onClickHandler(e) {
        e.preventDefault();
        setPage(0);
    }

	return (
		<div className='KonstanzRed Row H_Center' onClick={onClickHandler}>

			<img  alt="Bicycle" ></img>
			<div className='Text V_Center' style={{ "fontSize": "60px" }}>
				Konrad
			</div>

		</div>
	)
}
