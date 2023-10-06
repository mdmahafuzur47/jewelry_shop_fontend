import React from "react";
import img1 from "../../assets/dalivery/1.webp";
import img2 from "../../assets/dalivery/2.webp";
import img3 from "../../assets/dalivery/3.webp";
import img4 from "../../assets/dalivery/4.webp";

const DaliverySection = () => {
  return (
    <section className="bg-[#F4F4F4] py-12">
      <div className="mycontainer flex justify-between">
        <div className="flex flex-col items-center">
          <div className="">
            <img src={img1} alt="img" />
          </div>
          <h3 className="mt-3 font-semibold text-[18px]">
            Free Uk Standard Delivery
          </h3>
          <p>Designated day delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src={img2} alt="img" />
          </div>
          <h3 className="mt-3 font-semibold text-[18px]">
          Freshyly Prepared Ingredients
          </h3>
          <p>Made for your delivery date</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src={img3} alt="img" />
          </div>
          <h3 className="mt-3 font-semibold text-[18px]">
          98% Of Anta Clients
          </h3>
          <p>Reach their personal goals set</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src={img4} alt="img" />
          </div>
          <h3 className="mt-3 font-semibold text-[18px]">
          Winner Of 15 Awards
          </h3>
          <p>Healthy food and drink 2022</p>
        </div>
      </div>
    </section>
  );
};

export default DaliverySection;
