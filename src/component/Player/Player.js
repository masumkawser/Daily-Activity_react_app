import React, { useEffect, useState } from 'react';
import PlanSummary from '../PlanSummary/PlanSummary';

import  Play from '../Play/Play';
import"./Player.css";

const Player = () => {
    const[players,setPlayer]=useState([]);
    const[times,setTimes]=useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setPlayer(data))

    },[])
    const addToList =(time)=>{
        const newTime=time +time;
        setTimes(newTime);
    }
  
    return (
        <div>
            <div className='container'>
            <div className='player-display-container'>
            <h1>
               <img src=''></img>
            </h1>

                <p>select your player</p>
                <div className='players-container'>
                    {
                        players.map(player=><Play key={player.id}
                            player={player}
                            addToList={addToList}>
                        
                        </Play> )
                    }
                </div>
            </div>
                <div className='summary-container'>
                 <PlanSummary  times={times}></PlanSummary>
                </div>
            </div>
        </div>
    );
};

export default Player;