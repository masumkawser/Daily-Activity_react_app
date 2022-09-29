import React from 'react';
import"./Play.css";
const Play = (props) => {
    const{ name,img,age,time}=props.player;
    const{addToList}=props;
    return (
        <div>
            <div className='play'>
            <img className='img'src={img} alt="" />
            <div className='player-details'>
                <h4>{name}</h4>
                <p className='player-about'>the player active your daily work</p>
                <p>For Age:<span>{age}</span></p>
                <p>Time Required:<span>{time}</span>m</p>
            </div>
            <div className='btn-add'>
                <button onClick={()=>addToList(time)} className="btn-add-to-list">Add to List</button>
            </div>
            </div>
        </div>
    );
};

export default Play;