import React from "react";
import { Link } from "react-router-dom";

import  "./Footer.scss";

export default function Footer() {
  return (
       <div className="footer">
      <div className="wrapper">
        Nigeria
      </div>
      <div className="text-area">
        <div className='sidehustle'>
          Sidehustle
        </div>
             
      </div>
      <ul className='nav'>
          <li >  <Link to="#" className="link">
               About
              </Link> </li>
          <li ><Link to="#" className="link">
              Advertising
              </Link>  </li>
          <li ><Link to="#" className="link">
               Business
              </Link>  </li>
          <li className='end'> <Link to="#" className="link">
               Privacy
              </Link> </li>
          <li className='end'> <Link to="#" className="link">
                Terms
              </Link></li>
          <li className='end'> <Link to="#" className="link">
                Settings
              </Link> </li>


          </ul>
    </div>


    );
}
