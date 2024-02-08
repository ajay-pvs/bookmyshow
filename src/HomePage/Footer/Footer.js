import React, { Component } from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


function Footer() {
  const newLocal = <img src={"https://in.bmscdn.com/webin/common/icons/logo.svg"} />;
  return (
    <div className="footer-sec">
      <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
        <div className="footer-top">
          <div className="footer-img">
            <img src={"https://in.bmscdn.com/webin/common/icons/hut.svg"} />
          </div>
          <div className="footer-top-inner">
            <span>List Your Show</span>
            <span>
              Got a show, event, activity or a great experience? Partner with us
              & get listed on BookMyShow
            </span>
          </div>
          <div className="footer-contact">
            <Button variant="contained">Contact today !</Button>
            
          </div>
        </div>
        <div className="footer-help">
          <div className="call">
            {/* <SupportAgentIcon/> */}
            <i class="fa-solid fa-headset"></i>
            <p>24/7 CUSTOMER CARE</p>
          </div>
          <div className="booking">
            <i class="fa-solid fa-ticket"></i>
            <p>Resend booking confirmation</p>
          </div>
          <div className="newsletter">
            <i class="fa-solid fa-envelope"></i>
            <p>Subscribe to newsletter</p>
          </div>
        </div>
 
        <div className="footer-bottom">
          <div className="footer-logo">
            <div class="footer-logo-line"></div>
            {newLocal}
            <div class="footer-logo-line"></div>
          </div>

          <div className="social-icons">
            <div className="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="footer-copyright">
            <p>
              Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
              Reserved
            </p>
            <p>
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
            </p>
            <p>Unauthorized use is prohibited and punishable by law.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
