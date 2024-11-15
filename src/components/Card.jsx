import React from "react";
import { FaFlag } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Card = (props) => {
    // console.log(props.player.name);
    const {
        playerId,
        name,
        country,
        role,
        battingType,
        bowlingType,
        biddingPrice,
        image
    } = props.player;

    return (
        <div className="">
            <div className="card card-compact bg-base-100 w-72 shadow-xl text-white">
                <figure>
                    <img
                        src={image}
                        alt={name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold ">
                        <FaRegUserCircle /> {name}
                    </h2>
                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-2 text-lg">
                            <FaFlag /> {country}
                        </p>
                        <h1 className="text-lg px-2 py2 bg-slate-500 rounded-md">
                            {role}
                        </h1>
                    </div>
                    <h1 className="text-lg ">
                        Batting: {battingType ?? battingType}
                    </h1>
                    <h1 className="text-lg ">
                        {bowlingType !== "N/A"
                            ? `Bowling: ${bowlingType}`
                            : null}
                    </h1>

                    <div className="card-actions flex justify-between items-center">
                        <h1 className="text-lg ">Price: ${biddingPrice}</h1>
                        <button
                            onClick={()=>props.setPlayerSelected(playerId)}
                            className="btn btn-primary"
                        >
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Card;
