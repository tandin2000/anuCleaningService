import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea4 from "../../components/BreadcrumbArea/BreadcrumbArea4";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery"


const ServicesDetailsPage = () => {
  useEffect(() => {
    //gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea4
          title={"Condominium Janitorial Services"}
          subtitle={"Condominium Janitorial Services"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="0">
              
                    {/* <BeforeAfterSlider
                      before={"/img/images/services_item_img04.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    /> */}
                    <img src="/img/images/condominium.jpg" alt="Service Image" style={{ width: "50%", height: "auto", display: "block" , margin: "0 auto"  }} />

                    {/* <ImageGallery/> */}

                  </div>
              <div className="services-details-content">
                <br/>
                <h2 className="title">Condominium Janitorial Services</h2>
                <p>
                We understand how important it is to maintain a clean, comfortable living environment for residents. Our condominium janitorial and maintenance services ensure that common areas, hallways, and shared spaces remain spotless and welcoming for all.
                <br/>
                Our team is dedicated to providing consistent, reliable cleaning using eco-friendly products that are safe for everyone. We take pride in creating a space that residents can be proud of, always paying attention to detail and working to exceed your expectations.
                </p>

             <br/>
             <Link to="/estimate" className="btn">
                        Request a Quote
                        </Link>

                            </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
