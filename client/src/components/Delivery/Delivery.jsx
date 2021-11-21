import React from "react";
import TextRating from "../TextRating/TextRating";
import "./Delivery.css";
import { Button} from "react-bootstrap";

export const Delivery = ({ addTask, duration }) => {
  
  const toggleShowA = () => {
    alert("Your Order is Confirm")
  };
  // const [addTask, setAddTask] = useState([]);

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
                <TextRating />
              </div>
            </div>

            <div className="time-price">
              <div className="time">Time : {duration}</div>
              <div className="price">Price : Rs {item.price}</div>
            </div>
            <div className="data-button">
              {/* <button>Click To Confirm</button> */}
              <Button
                id="liveToastBtn"
                onClick={toggleShowA}
                style={{ backgroundColor: "green" }}
                className="mb-2"
              >
                Click To Confirm
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
