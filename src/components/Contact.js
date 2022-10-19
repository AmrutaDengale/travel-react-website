import React from "react";
import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;
    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://reactform-e8ae2-default-rtdb.firebaseio.com/reactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully");
      }
    } else {
      alert("please fill all the data");
    }
  };

  return (
    <>
      <div className="about-container position-relative">
        <div className="about-img ">
          <h1 className="display-3 fw-bold text-white text-center about-content">
            Contact
          </h1>
        </div>
      </div>

      <section>
        
        
            
              <h3 className="fs-4 text-center pt-5 sub-heading mt-5">
                Talk with our team
              </h3>
              <h1 className="display-4  fw-bold text-center mt-3">
                Any Question?<br></br>Feel Free to Contact
              </h1>
              <div className="social-links">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-google"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
              </div>
           
             
        <div className="container">    
              <form method="POST" className="row g-3 contact-form" >
            <div className="col-md-6 col-sm-3 form-field">
            {/* <label for="inputEmail4" class="form-label">Name</label> */}
              <input
                    type="text"
                    class="form-control ip-form"
                    id="validationCustom01"
                    name="name"
                    placeholder="Your Name"
                    value={user.name}
                    onChange={getUserData}
                    required
              />
              </div>
              
                <div class="col-md-6 col-sm-3 form-field">
                  <input
                    type="email"
                    class="form-control ip-form"
                    id="validationCustom02"
                    name="email"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={getUserData}
                    required
                  />
                </div>
                <div class="col-lg-6 col-sm-3 form-field">
                  <input
                    type="text"
                    class="form-control ip-form"
                    id="validationCustom01"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={user.phone}
                    onChange={getUserData}
                    required
                  />
                </div>
                <div class="col-lg-6 col-sm-3 form-field">
                  <input
                    type="email"
                    class="form-control ip-form"
                    id="validationCustom02"
                    name="address"
                    placeholder="Your Address"
                    value={user.address}
                    onChange={getUserData}
                    required
                  />
                </div>
                <div class="col-12 col-6 form-field">
                  <textarea
                    class="form-control  ip-form"
                    id="exampleFormControlTextarea1"
                    name="message"
                    placeholder="Your Messege here"
                    value={user.message}
                    onChange={getUserData}
                    rows="3"
                    required
                  ></textarea>
                  <button
                    className=" about-btn mt-3"
                    onClick={postData}
                  >
                    Send
                  </button>
                </div>
          
              </form>
              </div> 
          
        
      </section>
    </>
  );
};

export default Contact;
