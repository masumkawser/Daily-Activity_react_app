import React,{ useState } from 'react';
import"./PlanSummary.css";


import swal from 'sweetalert';

const PlanSummary = (times) => 
{
    const [minutes, setMinutes] = useState(0);
    // const [previousTime, setPreviousTime] = useState(0);

    const btnBreak = (event) => {
        const btnTime = parseInt(event.target.value);

        // save local storage
        localStorage.setItem('breakTime', btnTime);

        setMinutes(btnTime);}
        const showAlert = () => {
            swal({
                title: "Well Done!",
                text: "Exercise Successfully Completed!",
                icon: "success",
              });
            }
    return (
        <div className='summary'>
            <div className='user-container'>
            <div className='user-image'>
                {/* <img src={require("")} alt="img" /> */}
            </div>
            <div className='user-details'>
                <p>Kawser Ahamed</p>
                <address><small>Dhaka, Bangladesh</small></address>
            </div>
        </div>
        <div className='user-personal-info'>
            <div>
                <p><span>75</span> <sub>kg</sub></p>
                <p>Weight</p>
            </div>
            <div>
                <p><span>5.4</span></p>
                <p>Height</p>
            </div>
            <div>
                <p><span>23</span><sub>yrs</sub></p>
                <p>Age</p>
            </div>
        </div>
        <div>
            <h3>Add A Break</h3>
            <div className='add-break'>

                <button onClick={btnBreak} className='btn-break' value={10}>10m</button>
                <button onClick={btnBreak} className='btn-break' value={20}>20m</button>
                <button onClick={btnBreak} className='btn-break' value={30}>30m</button>
                <button onClick={btnBreak} className='btn-break' value={40}>40m</button>
                <button onClick={btnBreak} className='btn-break' value={50}>50m</button>

            </div>
        </div>
        <div>
            <h3>Activity Details</h3>
            <div>
                <div className='riding-time'>
                    <h4>Activity time</h4>
                    <p>{times.times} <span>m</span></p>
                </div>
                <div className='break-time'>
                    <h4>Break time</h4>
                    <p>{minutes} <span>m</span></p>
                </div>
            </div>
        </div>
        <div className='activity-button'>
            <button onClick={showAlert} className='btn-completed'>Activity Completed</button>
        </div>
        </div>
    );
};

export default PlanSummary;