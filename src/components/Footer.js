
import React from 'react'

const Footer = () => {
  return (
   <>
  <footer className="side-footer mt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-logo mt-3">
              <span class="logo" >TripiFy</span>
              </div>
              <p className="footer-text">Welcome to our Trip and Tour Agency.<br/>Lorem ipsum dolor sit amet consectetur. </p>
              <hr className="hr"/>
              <ul className="footer-about-info ">
                <li>
                  <div className=" footer-icon p-2">
                  <i class="fa-sharp fa-solid fa-square-phone"></i>
                  </div>

                    <div className="text">
                    <span className='icon-text'>+91 3472325979</span> 
                    </div>
                 
                </li>
                <li>
                  <div className=" footer-icon p-2">
                  <i class="fa-solid fa-envelope"></i>
                  </div>

                    <div className="text">
                     <span className='icon-text'> needhelp@gmail.com</span>
                    </div>
                 
                </li>
                <li>
                  <div className=" footer-icon p-2">
                  <i class="fa-solid fa-location-dot"></i>
                  </div>

                    <div className="text">
                      <span className='icon-text'>
                      665 road,deccan street,pune
                      </span>
                    </div>
                 
                </li>
              </ul>
            </div>

            <div className="col-xl-2 col-lg-6 col-md-6">
              <div className="footer-column mt-2">
                <h3 className="column-text text-white fw-bold ml-3">
                  Company
                </h3>
                <ul className="column-ul p-3">
                  <li>About Us</li>
                  <li>Community Blog</li>
                  <li>Rewards</li>
                  <li>Work With Us</li>
                  <li>Meet the Team</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-6 col-md-6">
              <div className="footer-column mt-2">
                <h3 className="column-text text-white fw-bold">
                 Explore
                </h3>
                <ul className="column-ul">
                  <li>Account</li>
                  <li>Legal</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-column mt-2">
              <h3 className="column-text text-white fw-bold">
                 Newsletters
                </h3>

                <form action="https://formspree.io/f/xvoyrjlk" method="POST">
                  <div class="mb-2 form-grp">
 
                   <input type="email" name="email" class="form-control p-3 mt-3 form-ip text-center" id="exampleInputEmail1" placeholder='Email Address' aria-describedby="emailHelp"/>

                  </div>
                   <div class="mb-2 form-grp">
                     <button className="form-btn w-100 h-100 p-3 mt-3" type="submit">Subscribe</button>
                   </div>
                  <div class="mb-5 mt-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                   <label class="form-check-label hr" for="exampleCheck1"> I agree to all terms and condditions</label>
                   </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> 
   </>
  )
}

export default Footer;