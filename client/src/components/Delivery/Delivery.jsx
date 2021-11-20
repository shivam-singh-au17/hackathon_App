import React from 'react'
import ProgressBar from '../Progress/ProgressBar'
import './Delivery.css'

export const Delivery = () => {

    const bg = "#ef6c00";
    const completed = 60;

    return (
        <div className="data-cont">
            <div className="data-head">
                <div><img src="https://lh3.googleusercontent.com/proxy/haYPGaKN5zGjNoBUCNtF9IBtB1O5zBqwUHIct_xIFcxjZLNB-eBU2_dp2QMRca1IqviPCJwLS4ymWw-GPYgBOHQzAt5swi7JcYXsTDbWVWxybEA98P096rSTMKXm8isCY4dxW-8wRiU5Mw5DZvnqHIM7apWf" alt="" /></div>
                <div className="data-head-text"><div>DTDC</div></div>
            </div>
            <hr />

            <div className="data-progress">
                <div><img src="https://img.favpng.com/17/21/8/transport-vehicle-logo-png-favpng-drftYf1cqN9a8A7nrVntDeCRP.jpg" alt="" /></div>
                <div><ProgressBar bgcolor={bg} completed={completed}/></div>
            </div>

            <div className="time-price">
                <div className="time">Time : 10 days</div>
                <div className="price">Price : 2300 /-</div>
            </div>
            <div className="data-button">
                <button>
                    Click To Confirm
                </button>
            </div>
        </div>
    )
}
