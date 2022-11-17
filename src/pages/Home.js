import React from "react";
import heroImg from "../images/hero_image.png";
import serviceData from "../data/homedata.json";
import { ServicesCard } from "../components/Cards";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <h1>
            We are <span>poly</span> <span>Store</span>, We offer Stress Free
            Shopping
          </h1>
        </div>
        <div className="col-md-7 col-m-12">
          <img src={heroImg} alt="" className="w-100" />
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section className="container mt-5 pt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolores
        odit quod maiores doloribus similique ipsam. Laborum, suscipit. Non
        iusto unde ad ipsum consequatur neque amet incidunt optio repellendus
        dolore, nisi error itaque quos quia facilis earum quis, quisquam nulla.
      </p>
    </section>
  );
};

const OurServicesSection = () => {
  return (
    <section className="mt-5 pt-5">
      <h2 className="text-center mb-4">Our Services</h2>

      <div className="container">
        <div className="row">
          {serviceData.services.map((service) => {
            return (
              <div className="col-md-4 col-sm-12" key={service.id}>
                <ServicesCard {...service} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Home;
