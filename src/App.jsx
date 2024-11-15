import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Players from "./components/Players";
import Selected from "./components/Selected";
import playerData from "./components/Players.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

function App() {
    const [show, setShow] = useState(true);
    const [coin, setCoin] = useState(0);
    const [selected, setSelected] = useState([]);

    const claimCoin = () => {
        setCoin((prev) => prev + 1000000);
        notify("1000000 coins claimed successfully.", true);
    }
    
    const notify = (message, isSuccess) => {
        const toastType = isSuccess ? "success" : "error"; 
        toast[toastType](message, { 
            theme: "colored",
        });
    };
    
    const setPlayerSelected = (playerId) => {
        if (selected.length < 6) {
            const selectedPlayer = playerData.find(player => player.playerId === playerId);

            if (selected.some(player => player.playerId === playerId)) {
                notify("Player is already selected.", false);
                return;
            }

            if (selectedPlayer.biddingPrice > coin) {
                notify("Not enough coins to buy this player. Claim some credit first.", false);
            } else {
                setSelected(prevSelected => [...prevSelected, selectedPlayer]);
                setCoin(prev => prev - selectedPlayer.biddingPrice);
                notify(`Congrats! ${selectedPlayer.name} is now in your team.`, true);
            }
        } else {
            notify("You can only select 6 players.", false);
        }
    }

    const handleRemovePlayer = (playerId) => {
        setSelected((prevSelected) => prevSelected.filter(player => player.playerId !== playerId));
        notify("Removed player.", true);
      };

    return (
        <>
            <div className="sticky top-0 z-50 backdrop-blur-md bg-white/40 px-2 md:px-8 lg:px-28 ">
                <Navbar coin={coin}/>
                <ToastContainer position="top-center" theme="colored"/>
            </div>

            <div className="mx-3 md:mx-10 lg:mx-28 ">
                <Hero claimCoin={claimCoin}/>
            </div>
            
            <div className="mx-3 md:mx-10 lg:mx-28 mt-10">
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <h1 className="text-xl md:text-3xl font-bold"> {show? "Available Players": `Selected Player (${selected.length}/6)`}</h1>
                    <div className="flex gap-5 ">
                        <button onClick={()=> setShow(true)} className="px-3 py-2 bg-yellow-400  rounded-md text-md md:text-lg font-bold hover:bg-purple-300">Available</button>
                        <button onClick={()=> setShow(false)} className="px-3 py-2 bg-gray-200 rounded-md text-md md:text-lg font-bold hover:bg-orange-300">Selected ({selected.length})</button>
                    </div>
                </div>
            </div>

            {show? (
                <div className="mx-3 md:mx-10 lg:mx-28 ">
                    <Players setPlayerSelected={setPlayerSelected} notify={notify} />
                </div>
            ):(
               
                <div className="mx-3 md:mx-10 lg:mx-28 my-10">
                    <Selected selected={selected} setShow={setShow} handleRemovePlayer={handleRemovePlayer} />
                </div>
            )}
            
            <div className="mt-52">
                <Footer />
                <hr />
                <footer className=" footer-center bg-base-300 text-base-content p-5">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Samin Mahmud</p>
                    </aside>
                </footer>
            </div>
            
            
        </>
    );
}

export default App;
