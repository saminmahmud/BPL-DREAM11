import React from "react";
import playerData from "./Players.json";
import Card from "./Card";

const Players = (props) => {
    // console.log(playerData);

    return <div className="mt-12">
        

        <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center place-items-center">
            
            {
                playerData.map((player) => {
                    return <Card key={player.playerId} player={player} setPlayerSelected={props.setPlayerSelected} notify={props.notify} />;
                })
            }
        </div>
    </div>;
};

export default Players;
