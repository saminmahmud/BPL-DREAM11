import React from "react";
import banner from "../assets/banner-main.png";
import bground from "../assets/backgroud.png";
import logo from "../assets/logo-footer.png";

const Hero = (props) => {
    return (
        <div
            className="hero rounded-md mt-3"
            style={{
                backgroundImage: `url(${bground})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "80vh",
            }}
        >

            <div className=" text-center text-white  max-w-[85%]">
                <div className="flex flex-col justify-center items-center">
                    <img className="mb-5 " src={logo} alt=""  />
                    <h1 className="mb-5 text-xl md:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5 text-lg md:text-3xl text-gray-400">
                        Beyond Boundaries Beyond Limits 
                    </p>
                    <div className="border bg-black border-yellow-400 inline-block rounded-lg">
                        <button onClick={props.claimCoin} className="btn bg-warning btn-primary m-1 hover:bg-violet-400">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
