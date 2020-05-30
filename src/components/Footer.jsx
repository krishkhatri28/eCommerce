import React from "react";
import "./css/footer.css"

function Footer() {
  const year = new Date().getFullYear();
  return (

<section className="footer-class-1">
      <div className="footer-class-2 py-5">
          <div className="container py-lg-5">
              <div className="text-txt row">
                  <div className="left-side col-lg-4">
                      <h3><a className="logo-footer" href="index.html">
                            DOM<span className="dasd">-</span>Services</a></h3>
                                    <a className="navbar-brand" href="#index.html">
                                        <img src="image-path" alt="Your logo" title="Your logo" style={{height:"35px"}} />
                                    </a> -->
                      <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus
                          a ligula quam. Ut blandit eu leo non suscipit. </p>
                      <ul className="social-footerhny mt-lg-5 mt-4">

                          <li><a className="facebook" href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a>
                          </li>
                          <li><a className="twitter" href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a>
                          </li>
                          <li><a className="google" href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a>
                          </li>
                          <li><a className="instagram" href="#"><span className="fa fa-instagram" aria-hidden="true"></span></a>
                          </li>
                      </ul>
                  </div>

                  <div className="right-side col-lg-8 pl-lg-5">
                      <h4>50% off for the new user!!!</h4>
                      <div className="sub-columns">
                          <div className="sub-one-left">
                              <h6>Useful Links</h6>
                              <div className="footer-class-2-ul">
                                  <ul>
                                      <li><a href="#">Home</a></li>
                                      <li><a href="#">About</a></li>
                                      <li><a href="#">Blog</a></li>
                                      <li><a href="#">Contact</a></li>
                                  </ul>
                                  <ul>
                                      <li><a href="#">Careers</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                      <li><a href="#">Terms and Conditions</a></li>
                                      <li><a href="contact.html">Support</a></li>
                                  </ul>
                              </div>

                          </div>
                          <div className="sub-two-right">
                              <h6>Address</h6>
                              <p className="mb-5">G.s. Road, near Railway station</p>

                              <h6>We accept:</h6>
                              <ul>
                                  <li><a className="paymentCheck" href="#"><span className="fa fa-cc-visa"
                                              aria-hidden="true"></span></a>
                                  </li>
                                  <li><a className="paymentCheck" href="#"><span className="fa fa-cc-mastercard"
                                              aria-hidden="true"></span></a>
                                  </li>
                                  <li><a className="paymentCheck" href="#"><span className="fa fa-cc-paypal"
                                              aria-hidden="true"></span></a>
                                  </li>
                                  <li><a className="paymentCheck" href="#"><span className="fa fa-cc-amex"
                                              aria-hidden="true"></span></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="below-section row">
                  <div className="columns col-lg-6">
                      <ul className="jst-link">
                          <li><a href="#">Privacy Policy </a> </li>
                          <li><a href="#">Term of Service</a></li>
                          <li><a href="#">Customer Care</a> </li>
                      </ul>
                  </div>
                  <div className="columns col-lg-6 text-lg-right">
                      <p>© {year} SpryStore. All rights reserved.</p>
                  </div>
              </div>
          </div>
      </div>
      </section>
  );
}

export default Footer;
