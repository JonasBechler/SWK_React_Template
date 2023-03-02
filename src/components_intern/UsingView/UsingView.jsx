import React, { useState } from 'react'

import RegisterWidget from "../../components_basics/RegisterWidget/RegisterWidget";
import AccountWidget from '../AccountWidget/AccountWidget';



export default function UsingView({ mainview, page, setPage, showBackground, setShowBackground, details, user, fusionAuth_data, templateUser, config }) {


	const get_page_content = _ => {
		if (details){
			if (!showBackground){
			
				if (page === 0){
					return (
					<>
						<div className='Spacer'></div>
						<AccountWidget className='Main_Item' details={details} user={user} setPage={setPage} config={config} fusionAuth_data={fusionAuth_data}></AccountWidget>
					</>
					)
				}
				else if (page === 2){
					return (
					<>
						<div className='Spacer'></div>
						<RegisterWidget className='Main_Item' details={details} templateUser={templateUser} setPage={setPage} config={config}></RegisterWidget>
					</>
					)
				}
			}
			else{
				return <></>
			}
		}
		
	}




    return (
		<div className='H_Center'>
			<img src={mainview} alt="Logo" style={{"width":"100%", "height":"100%"}}/>

			
            <div style={{"position":"absolute"}}>
                {get_page_content()}
            </div>
		</div>

	)
}

