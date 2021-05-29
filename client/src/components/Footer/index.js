import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title"><strong>SAFETY</strong></h2>
        <ul>
        <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
        </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title"><strong>LEGAL</strong></h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title"><strong>CAREERS</strong></h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title"><strong>STAY UPDATED</strong></h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
      <section>
      <ul class="ft-social-list">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </section>
      
      <span><i class="far fa-copyright">2021 Created by Lamont Thompson</i></span>
    </footer>
  );
}

export default Footer;
