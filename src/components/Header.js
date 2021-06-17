import React from 'react'

import Typed from 'react-typed';


function Header() {
    return (
        <div className="header-wraper">
             <div className="main-info">
                 <h1>web development and websites promotions</h1>
                 <Typed className= "typed-text" strings={["Web design","Web development","Facebook ads","Google ads"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
                 <a href="" className="btn-main ">contact me</a>
             </div>

        </div>
        





            
     
    )
}

export default Header
