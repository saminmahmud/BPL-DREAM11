import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const Selected = (props) => {
  return (
    <>

      {
        props.selected?.map((player) => {
          {/* console.log(player.image); */}
          return(
            <div key={player.playerId} className='flex justify-between items-center border border-gray-400 p-3 rounded-lg'>
              <div className='text-md sm:text-xl flex items-center gap-3'>
                <img src={player.image} alt={player.name} width={150} className='rounded-lg' />
                <div>
                  <h1 className='font-bold'>{player.name}</h1>
                  <p>{player.role}</p>
                  <p>${player.biddingPrice}</p>
                </div>
              </div>
              <RiDeleteBin6Line onClick={()=>props.handleRemovePlayer(player.playerId)} className='text-red-500 text-4xl bg-gray-100 p-1 rounded-md cursor-pointer' />
            </div>
          );
        })
      }
      

    <button onClick={props.setShow} className="btn btn-primary font-bold mt-5">Add More Player</button>
    </>


  )
}

export default Selected
