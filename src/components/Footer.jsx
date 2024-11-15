import React from "react";
import logo from "../assets/logo-footer.png";

const Footer = () => {
   
    return (
        <div className="bg-base-300 text-base-content px-10 pb-10">
            
            <div className="relative -top-28">
                <div className="flex justify-center items-center ">
                    <div className="bg-gradient-to-tr from-[#B9E9F7] via-white to-[#FAD99D] h-60 w-full md:w-[85%] flex flex-col justify-center items-center rounded-xl text-center gap-2">
                        <h1 className="text-md sm:text-xl font-bold md:text-2xl text-black">Subscribe to our Newsletter</h1>
                        <p className="text-md sm:text-xl md:text-2xl text-gray-600">Get the latest updates and news right in your inbox!</p>
                        <div className="space-x-2 space-y-1 sm:space-y-0 ">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item w-40 focus:outline-none font-bold"
                            />
                            <button className="font-bold text-black btn myBtn btn-color join-item bg-gradient-to-r from-[#F0CA69] to-[#D05A71] shadow-inner">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <img src={logo} alt="logo" className="min-w-44 m-auto " />
            <footer className="mt-5 footer flex flex-col lg:flex-row lg:justify-around gap-5 ">
                
                <nav className="lg:w-1/5">
                    <h6 className=" text-2xl font-bold text-white">
                        About Us
                    </h6>
                    <a className="link link-hover font-bold">
                        We are enthusiastic team committed to giving our clients
                        the greatest servicec possible.
                    </a>
                </nav>
                <nav className="">
                    <h6 className="text-white text-2xl font-bold">Quick Links</h6>
                    <li className="link link-hover font-bold">Home</li>
                    <li className="link link-hover font-bold">Services</li>
                    <li className="link link-hover font-bold">About</li>
                    <li className="link link-hover font-bold">Contact</li>
                </nav>
                <nav className="">
                    <h6 className="text-white text-2xl font-bold">Subscribe</h6>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item w-40 focus:outline-none font-bold"
                        />
                        <button className="font-bold text-black btn myBtn btn-color join-item bg-gradient-to-r from-[#F0CA69] to-[#D05A71] shadow-inner">
                            Subscribe
                        </button>
                    </div>
                </nav>
            </footer>
            
        </div>
    );
};

export default Footer;
