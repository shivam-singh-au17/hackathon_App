import React, { useEffect, useState } from "react";

import ProgressBar from '../Progress/ProgressBar'
import TextRating from '../TextRating/TextRating';
import './Delivery.css'
import axios from "axios";

export const Delivery = () => {
  const [addTask, setAddTask] = useState([]);
  const bg = "#ef6c00";
  const completed = 60;

  function getMyAllCompony() {
    axios
      .get(`https://mysterious-depths-33415.herokuapp.com/company`)
      .then((res) => {
        setAddTask(res.data);
        console.log("res:", res.data);
      });
  }

  useEffect(() => {
    getMyAllCompony();
  }, []);

  return (
    <>
      {addTask.map((item) => {
        return (
          <div className="data-cont" key={item.id}>
            <div className="data-head">

              <div>
                <img src={item.company_logo} alt="" />
              </div>
              <div className="data-head-text">
                <div>{item.company_name}</div>
              </div>
            </div>
            <hr />

            <div className="data-progress">
              <div>
                <img
                  src="https://img.favpng.com/17/21/8/transport-vehicle-logo-png-favpng-drftYf1cqN9a8A7nrVntDeCRP.jpg"
                  alt=""
                />
              </div>
              <div>
                <ProgressBar bgcolor={bg} completed={completed} />
              </div>
            </div>

            <div className="time-price">
              <div className="time">Time : 10 days</div>
              <div className="price">Price : 2300 /-</div>
            </div>
            <div className="data-button">
              <button style={{ backgroundColor: "green" }}>
                Click To Confirm
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
