import React from "react";

 import { NavLink } from "react-router-dom";
// import {CgMenu ,CgClose } from "react-icons/cg";
// import {faBars} from "react-icons/fa"
// import {ImCross} from "react-icons/im";

const Navbar = () => {
// const [isMobile , setIsMobile] = useState(false)

  return (
    <>
    {/* <nav className="navbar navbar-expand-lg fixed-top p-md-3">
  <div className="container">
       <h3 className="logo">TripiFy</h3>

              <ul className= {isMobile? "nav-links-moblie": "nav-links"}
        onClick={()=> setIsMobile(false)}
        >

                <NavLink to="/" className="nav-item">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <li>About</li>
        </NavLink>
        <NavLink to="/destination" className="nav-item">
          <li>Destination</li>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <li>Contact</li>
        </NavLink>

               <button className="mobile-menu-icon" 
       onClick={()=> setIsMobile(!isMobile)}
       >
       {isMobile ? 
        (
        <i className="fas fa-times"></i>
        ): (
        <i className="fas fa-bars"></i>)}
  
        </button> 
     
      </ul>
      
    </div>
  </div>
</nav> */}

     {/* <nav className="navbar">
        <h3 className="logo">TripiFy</h3>
        <ul className= {isMobile? "nav-links-moblie": "nav-links"}
        onClick={()=> setIsMobile(false)}
        >
        
        <NavLink to="/" className="nav-item">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <li>About</li>
        </NavLink>
        <NavLink to="/destination" className="nav-item">
          <li>Destination</li>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <li>Contact</li>
        </NavLink>
        
      
        </ul> */}
      {/* <div className="mobile-navbar-btn">
        <CgMenu name="menu-outline" className="mobile-nav-icon" 
        onClick={setMobile(true)}/>
        <CgClose name="close-outline" className="mobile-nav-icon close-outline" />
        </div>  */}
       {/* <button className="mobile-menu-icon" 
       onClick={()=> setIsMobile(!isMobile)}
       >
       {isMobile ? 
        (
        <i className="fas fa-times"></i>
        ): (
        <i className="fas fa-bars"></i>)}
  
        </button> 
       </nav>  */}

<nav class="navbar navbar-expand-md ">
  <div class="container-fluid">
  <NavLink to="/" className="logo">TripiFy</NavLink>
  {/* <h3 className="logo ">TripiFy</h3> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
      <i class="fa-solid fa-bars navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-items mx-4">
      <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-items mx-4">
      <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-items mx-4">
      <NavLink to="/destination">Destination</NavLink>
        </li>
        <li className="nav-items mx-4">
      <NavLink to="/contact">Contact</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

    </>
     
  );
};

export default Navbar;
