import React from 'react'
import ProgressBar from '../Progress/ProgressBar'
import TextRating from '../TextRating/TextRating';
import './Delivery.css'

export const Delivery = () => {

    const bg = "#ef6c00";
    const completed = 60;

    return (
        <div className="data-cont">
            <div className="data-head">
                <div><img src="data:image/png;base64,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" alt="" /></div>
                <div className="data-head-text">
                    <div>DTDC</div>
                    <div><TextRating /> </div>
                </div>
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
