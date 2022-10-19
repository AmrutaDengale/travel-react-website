import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-container position-relative">
        <div className="content">
          <h1 className="display-2 text-center fw-bold text-white heading">Travel &  Adventure</h1>
          <h4 className=" text-center  text-white sub-heading">Where Would You Like To Go?</h4>
        </div>
      </div>

{/* ***************************************************Destination**************************************************** */}
      <section className="destination1 mt-3">
      <div className="container">
          
            <h3 className="fs-4 text-center pt-5 sub-heading">Destination List</h3>
            <h1 className="display-4  fw-bold text-center">Go Exotic Places</h1>
          
            <div className="container mt-5">
          <div className="row p-0 m-0 ">
            <div className="col-md-3 pb-3 pl-2">
             
              <div className="destination-img">
              <img src="../assets/images/dest1.png" alt="" className=" w-100 h-100"/>
              <div className="img-overlay ">
                 <h1 className="text-center">Spain</h1>
              </div>
               </div>
            </div>

            <div className="col-md-6 pb-3 pl-2">
              <div className="destination-img ">
              <img src="../assets/images/dest2.png" alt="" className=" w-100 h-100"/>
              <div className="img-overlay ">
                 <h1 className="text-center">Thailand</h1>
              </div>

            </div>
            </div>

            <div className="col-md-3 pb-3 pl-2">
              <div className="destination-img ">
              <img src="../assets/images/dest3.png" alt="" className=" w-100 h-100"/>
              <div className="img-overlay ">
                 <h1>Africa</h1>
              </div>

            </div>
            </div>
            
          </div>

          <div className="row p-0 m-0">
          <div className="col-md-6 pb-3 pl-2">
              <div className="destination-img ">
              <img src="../assets/images/dest4.png" alt="" className=" w-100 h-100"/>
              <div className="img-overlay ">
                 <h1>Australia</h1>
              </div>

            </div>
            </div>

            <div className="col-md-6 pb-3 pl-2">
              <div className="destination-img ">
              <img src="../assets/images/dest5.png" alt="" className=" w-100 h-100"/>
              <div className="img-overlay ">
                 <h1>Switzerland</h1>
              </div>

            </div>
            </div>
          </div>

          </div>
          

        </div>
      </section>
      {/* ****************************about************************** */}
       <section className="about-one">
        <div className="container">
          <div className="row ">
            <div className="about-left col-md-6 col-lg-6 mt-3">
              <div className="left-img">
                <img src="../assets/images/about-img.png" alt="" className="w-100 h-100" />
              </div>
            </div>
            <div className="right-content col-md-6 col-lg-6 mt-5">
             
                <div className="about-titlemt-5">
                  <span className="fs-4 text-center  sub-heading">Get to know us</span>
                  <h1 className="display-4 mt-3 fw-bold">Plan Your Trip With Us</h1>
                </div>
                <p className="about-text mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, dolore deserunt. Repellendus amet beatae magni a
                  excepturi eum sequi corrupti reiciendis autem debitis,
                  voluptatem exercitationem molestiae doloremque laudantium
                  saepe aspernatur!
                </p>
                <ul className="list-unstyled about-ul">
                  <li>
                    <div className="icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                  </li>
                </ul>
                <a href="http://www.makemytrip.com/">
                <button className="mb-2 about-btn">Book Now</button>
                {/* onClick= "document.location='https://www.makemytrip.com/'" */}
                </a>
              </div>
            
          </div>
        </div>
      </section>
     
      
      {/* **********************POPULAR-TOURS*************************** */}
       <section className="popular-tours ">
        <div className="popular-tour_container">
          <div className="sec-title text-center mt-5">
            <span className="fs-4 text-center  sub-heading">Featured Tours</span>
            <h2 className="display-4  fw-bold text-center">Most Popular Tours</h2>
          </div>
        </div>
      {/* carousal */}
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner mt-5">
    <div class="carousel-item active">
    <div className="container">
        <div className="row">
          <div className="col-md-4  col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour1.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Dark Forest Adventure
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-4">
          <div className="card mb-4">
            <img src="../assets/images/tour2.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Discover Depth Of Beach
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour5.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              National Park Tour
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="container">
        <div className="row">
        <div className="col-md-4  col-lg-4">
          <div className="card mb-4">
            <img src="../assets/images/tour4.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Best Resort
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour1.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
          National Park Tour 2            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4  col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour2.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Historical Places
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="container">
      <div className="row">
      <div className="col-md-4 col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour5.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Historical Places
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour4.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
              Dark Forest Adventure
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
          <div className="card mb-4" >
            <img src="../assets/images/tour3.jpg" alt="" className="card-img"/>
            <div className="card-body">
              <div className="tour_star ">
              <i class="fa-solid fa-star">
              <small className="text-muted fw-light">  8.0 Superb</small>
              </i>
              </div>
            <h1 className="card-title">
             Beauty Of Nature
            </h1>
              <h3 className="card-pricing">$1870
              <small className="text-muted fw-light">/per person</small>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
            </div>
            </div>
          </div>


      </div>
     </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


</div>
      {/* carousal end */}

 </section> 

 {/*  **************************************************Partners*******************************************************/}
  <section>
  <div className="sec_partner">
  <div className="section-head">
  <p className="fs-4 text-center pt-5 sub-heading">
    Are you ready to travel?
  </p>
  <h3 className="heading3">Travely Is The World Leading Online Tour Booking Platform</h3>
  </div>

      </div>
    </section> 
  {/* *****************************reviews************************ */}
   <section className="reviews-one">
    <div className="container">
        <div className="sec-title-reviews text-center">
          <span className="fs-4 text-center pt-5 sub-heading">
          Testamonials & reviwes

          </span>
        <h2 className="display-4  fw-bold text-center">What They're Saying</h2>
        </div>
      {/* carousals */}
      
     
       
       <div id="carouselExampleIndicators" className="carousel carousel-dark slide text-dark fs-5 rounded" data-bs-ride="carousel">
          <div className="carousel-indicators mt-5">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner p-5 ">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5 " >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!
                      </p>
                      <h1 className="card-title">
                       Ayushi Rathi
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer

          </span>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                  
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                         <h1 className="card-title">
                       Neeraj Dhedia
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                 
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5" >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 p-4">
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                  <div className="card mt-5 " >
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate a, ipsum vero culpa quod!</p>
                      <h1 className="card-title">
                       Monali Roy
                     </h1>
                     <span className="fs-4 text-center pt-5 sub-heading">
                      Customer
                     </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>

    



    </div>

  </section> 
    </>
  );
};

export default Home;




