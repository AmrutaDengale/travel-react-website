import React from "react";

const About = () => {
  return (
    <>
        <div className="about-container ">
          <div className="about-img">
            <h1 className="display-3 fw-bold text-white text-center about-content">
              About
            </h1>
          </div>
        </div>

      {/* <section>
        <div className="container ">
          <div className="row g-5 mt-5 mb-5">
            <div className="col-md-6 col-lg-6 col-sm-4 ">
              <div className="left-img ">
                <img
                  src="../assets/images/about-left-img.jpg"
                  className="rounded-3"
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-sm-4 right-content w-100">
              <h5 className="fs-2  about-heading mt-4">Learn about us</h5>
              <h1 className="display-5 fw-bold mt-2 ">
                Dare to Explore with Travely Agency
              </h1>
              <h2 className="about-right-content">
                A Simply Perfect Place to Get Lost
              </h2>
              <p className=" lh-lg mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                cum hic cupiditate est, dolor expedita magni eveniet laboriosam,
                reiciendis quidem doloremque eum odit consequatur nesciunt
                inventore modi. Vitae, fuga. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A, autem!
              </p>

              <h1 className="fs-3 fw-bold ">Best Service</h1>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "77%" }}
                >
                  77%
                </div>
              </div>
              <h1 className="fs-3 fw-bold mt-3">Tour Agents</h1>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "38%" }}
                >
                  38%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

     {/*  */}
{/* ****************** */}
<section>
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-6">
            <div className="about-left-img mt-5">
              <img src="../assets/images/about-left-img.jpg" className=" rounded-3 img-fluid" alt="" />
            </div>
            </div>

          <div className="col-md-6">
            <h5 className="fs-2  about-heading mt-5">Learn about us</h5>
              <h1 className="display-5 fw-bold mt-3 ">
                Dare to Explore with Travely Agency
              </h1>
              <h2 className="about-right-content mt-2">
                A Simply Perfect Place to Get Lost
              </h2>
              <p className=" lh-lg mt-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                cum hic cupiditate est, dolor expedita magni eveniet laboriosam,
                reiciendis quidem doloremque eum odit consequatur nesciunt
                inventore modi. Vitae, fuga. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A, autem!
              </p>

              <h1 className="fs-3 fw-bold mt-2">Best Service</h1>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "77%" }}
                >
                  77%
                </div>
              </div>
              <h1 className="fs-3 fw-bold mt-3 mt-2">Tour Agents</h1>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "38%" }}
                >
                  38%
                </div>
              </div>

            </div>

          </div>
        </div>
</section>
{/* ****************** */}

     <section>
  <div className="sec_partner mt-5">
  <div className="section-head">
  <p className="fs-4 text-center pt-5 sub-heading">
    Are you ready to travel?
  </p>
  <h3 className="heading3">Travely Is The World Leading Online Tour Booking Platform</h3>
  </div>

      </div>
    </section> 
      {/* *********************************************reviews******************************************** */}
      <section className="reviews-one">
    <div className="container">
        <div className="sec-title-reviews text-center mt-auto">
          <span className="fs-4 text-center sub-heading">
          Testamonials & reviwes

          </span>
        <h2 className="display-4  fw-bold text-center mt-1">What They're Saying</h2>
        </div>
      {/* carousals */}
      
     
       
       <div id="carouselExampleIndicators" className="carousel carousel-dark slide text-dark fs-5 rounded" data-bs-ride="carousel">
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner p-5 ">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-3 ">
                {/* <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/> */}
                  <div className="card review-card mt-5 w-100 " >
                  <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img"/>
                  
                    <div className="card-body review-body mt-5">
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
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                 
                    <div className="card-body review-body mt-5">
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
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                <div className="col-md-4 col-lg-4 col-sm-3 p-4">
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img1.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                <div className="col-md-4 col-lg- col-sm-3 p-4">
                  <div className="card review-card mt-5" >
                <img src="../assets/images/testimonial-img2.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
                <div className="col-md-4 col-lg-4 col-sm-3 p-4">
                  <div className="card review-card mt-5 " >
                <img src="../assets/images/testimonial-img3.png" alt="" className="testimonial-img "/>
                    <div className="card-body review-body mt-5">
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
export default About;
