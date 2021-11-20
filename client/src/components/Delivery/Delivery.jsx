import React from "react";
import ProgressBar from "../Progress/ProgressBar";
import "./Delivery.css";

export const Delivery = ({ addTask, duration }) => {
  // const [addTask, setAddTask] = useState([]);
  const bg = "#ef6c00";
  const completed = 60;
  // const [priceData, setPriceData] = useState([]);

  // function getMyAllCompony() {
  //   axios
  //     .get(`https://mysterious-depths-33415.herokuapp.com/company`)
  //     .then((res) => {
  //       setAddTask(res.data);
  //     });
  // }

  // function getPriceData(id) {
  //   console.log("called with ", id);
  //   axios
  //     .post("https://mysterious-depths-33415.herokuapp.com/company/price", {
  //       from,
  //       to,
  //       weight,
  //       distance,
  //       company_id: id,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  // useEffect(() => {
  //   getMyAllCompony();
  //   addTask?.forEach((el) => {
  //     console.log(el);
  //     getPriceData(el?._id);
  //   });
  // }, []);
  console.log(duration, addTask);
  return (
    <>
      {addTask?.map((item) => {
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
              <div className="time">Time : {duration}</div>
              <div className="price">Price : {item.price}</div>
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
