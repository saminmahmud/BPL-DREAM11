import React from "react";
import logo from "../assets/logo-footer.png";

const Navbar = (props) => {
    return (
        <div className="navbar text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-black rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
                    >
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Fixture</a>
                        </li>
                        <li>
                            <a>Teams</a>
                        </li>
                        <li>
                            <a>Schedules</a>
                        </li>
                    </ul>
                </div>

                <img src={logo} alt="logo" width={70} />
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl gap-5">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Fixture</a>
                        </li>
                        <li>
                            <a>Teams</a>
                        </li>
                        <li>
                            <a>Schedules</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className=" px-1 text-xl gap-5">
                        <li className="border-2 rounded-md px-4 py-2 font-bold">
                            <a>{props.coin} Coin🪙</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
