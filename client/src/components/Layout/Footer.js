import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">

  <footer class="text-center text-lg-start bg-light text-muted">

  <section class="">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i><img alt="logo" src="images/logo.png"/>
          </h6>
          <p>
          When you get 20 products of price Rs.99/-, your total amount will be Rs. 1980/-. ... Having a good conversion rate is the foundation of high sales volume.
          </p>
        </div>
     
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to={"http://localhost:3000/category/mens"} class="text-reset">Mens</Link>
          </p>
          <p>
            <Link to={'http://localhost:3000/category/women'} class="text-reset">Women</Link>
          </p>
          <p>
            <Link to={'http://localhost:3000/category/sports'} class="text-reset">Sport</Link>
          </p>
          <p>
            <Link to={'http://localhost:3000/category/electronics'} class="text-reset">Electronic</Link>
          </p>
        </div>
      
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="/privacy" class="text-reset">Privacy</Link>
          </p>
          <p>
            <Link to={"http://localhost:3000/about"} class="text-reset">About</Link>
          </p>
          <p>
            <Link to={'http://localhost:3000/contact'} class="text-reset">Contactus</Link>
          </p>
         
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> India, In 10025, In</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            99sale@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 7240341075</p>
          <p><i class="fas fa-print me-3"></i> + 91 8824834855</p>
        </div>
       
      </div>
     
    </div>
  </section>
 


  
 
</footer>

    </div>
  );
};

export default Footer;
