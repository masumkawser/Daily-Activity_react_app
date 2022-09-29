import React from 'react';
import swal from 'sweetalert';
import"./Profile.css";
const Profile = () => {
    return (
        <div className='profile-cart'>
            <div className='profile'>
            <h6>Md.Kawser ahamed</h6>
            <p>web developer</p>
            </div>
            <div>
            <h3>Location</h3>
            <p>Dhaka,Bangladesh</p>git
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
            <label>Break Time: </label><input></input><br></br>
            <div>
            <button>Activity sucessfull</button>
            </div>
        </div>
    );
};

export default Profile;