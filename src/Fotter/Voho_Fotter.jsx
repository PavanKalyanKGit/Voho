import React from 'react'
import './Voho_F.css';
import {Link} from 'react-router-dom';
import { SLinks } from './Social_Liks';
const Voho_Fotter = () => {
  return (
    <div className='Fotter_Comp'>
        
       <div className='Social_Media_Links'>
       <h3>Follow us on </h3>
        {

            SLinks.map(data => (
              <div key={data.id} className='SLink_Comp'>
                
               <Link to={data.slink} target="_blank" rel="noopener noreferrer">
               <img src={data.simage} alt='Link'/>
               </Link>
              </div>
            ))
        }
       </div>

       <div className='Reserve'>
       <p>&copy; 2024 VOHO - Stream With Ease. All rights reserved. | Designed and Developed by <b>Pavan Kalyan K</b>.</p>

       </div>
      
    </div>
  )
}

export default Voho_Fotter