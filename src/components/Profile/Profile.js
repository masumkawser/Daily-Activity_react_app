import React from 'react';
import"./Profile.css";
const Profile = () => {
    return (
        <div>
            <div className='profile'>
            <h3>Md.Kawser ahamed</h3>
            <p>web developer</p>
            </div>
            <div className='profile'>
            <h3>Md.Kawser ahamed</h3>
            <p>web developer</p>
            </div>
            <h3>Add Break</h3>
            <div className='profile'>
            <button>10 minit</button>
            <button>15 minit</button>
            <button>20 minit</button>
            <button>25 minit</button>
            </div>
            <h3>Activity details</h3>
            <label>Activity Time: </label><input></input><br></br>
            <label>Break Time: </label><input></input>
            <div>
                
            </div>
        </div>
    );
};

export default Profile;