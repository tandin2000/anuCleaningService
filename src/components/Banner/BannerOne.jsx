import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bgImgFromData } from "../../lib/helpers";
import { jarallax } from "jarallax";

const BannerOne = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section
      className="banner-area jarallax banner-bg"
      data-background="/img/banner/banner_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="banner-content">
             
              <img
                className="award"
                src="/img/images/award.png"
                data-aos="fade-right"
                alt=""
              />
            
             <br/>
              <br/>
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
              Anu Building Services
              </span>

              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              Best Professional  Janitorial services Solutions
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".6s">
              Experience exceptional cleanliness with our expert team. Quick, thorough, and reliable service tailored to your needs for a spotless home environment.
              </p>

              <div className="banner-btn">
               
               
               <Link
                  to="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  Discover MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
