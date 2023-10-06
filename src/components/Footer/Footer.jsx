import React from "react";
import footerImg from "../../assets/footer/1.webp";
import logo from "../../assets/logo/logo.webp";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagram,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { MdAddCall, MdLocationPin, MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <section className="pt-20 pb-8">
      <div className="mycontainer">
        <div className="grid grid-cols-7 pb-10 gap-10">
          <div className="col-span-2">
            <img src={logo} alt="logo" />
            <p className="my-3">
              We are a team of designers and made that create high quality
              Jewwelers design & insure great quality.
            </p>
            <div className="flex gap-2">
              <span className="border p-3 rounded-md">
                <FaFacebookSquare />
              </span>
              <span className="border p-3 rounded-md">
                <FaTwitterSquare />
              </span>
              <span className="border p-3 rounded-md">
                <FaInstagram />
              </span>
              <span className="border p-3 rounded-md">
                <FaGooglePlusSquare />
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-3">PRODUCT</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Prices drop</a>
              </li>
              <li>
                <a href="#">New products</a>
              </li>
              <li>
                <a href="#">Best sales</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-3">ABOUT US</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <MdLocationPin className="text-2xl text-[#CDA557] inline" />
                <span>Address:</span> The Barn, Ullenhall, Henley in Arden B578
                5CC, England
              </li>
              <li className="flex items-center gap-1">
                <MdAddCall className="text-2xl text-[#CDA557] inline" />
                <span>Call Us:</span> <a>+123 321 345</a>
              </li>
              <li className="flex items-center gap-1">
                <MdOutlineMail className="text-2xl text-[#CDA557] inline" />
                <span>Email:</span> <a>info@yourdomain.com</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-3">
              SIGN UP FOR NEWSLATTER
            </h3>
            <p>
              Subscribe to our newsletters now and stay up-to-date with new
              collections
            </p>
            <div className="border mt-5 flex gap-3 rounded-lg">
              <input
                className="w-full p-3 outline-none"
                placeholder="Enter your email..."
                type="text"
              />
              <button className="bg-[#CDA557] px-4 py-3 rounded-lg">
                <BsFillSendFill className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <ul className="flex gap-1 text-gray-500 flex-wrap justify-center">
          <li>
            <a href="#">Online Shopping/</a>
          </li>
          <li>
            <a href="#">Promotions/</a>
          </li>
          <li>
            <a href="#">My Orders/</a>
          </li>
          <li>
            <a href="#">Help/</a>
          </li>
          <li>
            <a href="#">Customer Service/</a>
          </li>
          <li>
            <a href="#">Support/</a>
          </li>
          <li>
            <a href="#">Most Populars/</a>
          </li>
          <li>
            <a href="#">New Arrivals/</a>
          </li>
          <li>
            <a href="#">Special Products/</a>
          </li>
          <li>
            <a href="#">Manufacturers/</a>
          </li>
          <li>
            <a href="#">Our Stores/</a>
          </li>
          <li>
            <a href="#">Shipping/</a>
          </li>
          <li>
            <a href="#">Payments/</a>
          </li>
          <li>
            <a href="#">Warantee/</a>
          </li>
          <li>
            <a href="#">Refunds/</a>
          </li>
          <li>
            <a href="#">Checkout/</a>
          </li>
          <li>
            <a href="#">Discount/</a>
          </li>
          <li>
            <a href="#">Refunds/</a>
          </li>
          <li>
            <a href="#">Policy Shipping</a>
          </li>
        </ul>
        <div className="flex text-gray-500 flex-col items-center mt-4">
          <img className="mb-3 " src={footerImg} alt="footerimg" />
          <p>Copyright © 2022 Md.Mahafuzur Rahaman. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
