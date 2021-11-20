import React, { useState } from "react";
import { Delivery } from "../Delivery/Delivery";
import { useFetch } from "../utils/useFetch";
import "./Home.css";

const iniState = {
  cityFrom: "",
  cityTo: "",
  date: "",
  qty: "",
  weight: "",
  dimensionsL: "",
  dimensionsW: "",
  dimensionsH: "",
};

const Home = () => {
  const [myData, setMyData] = useState(iniState);
  const [queryTo, setQueryTo] = useState("");
  const [to, setTo] = useState("");
  const [queryFrom, setQueryFrom] = useState("");
  const [from, setFrom] = useState("");
  const { loading, error, data } = useFetch(
    `https://api.postalpincode.in/postoffice/${
      queryTo.trim() || queryFrom.trim()
    }`
  );

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...myData,
      [name]: type === "checkbox" ? checked : value,
    };
    setMyData(myAllUserData);
  };

  const handleChangFrom = (e) => {
    setQueryFrom(e.target.value);
    setFrom(e.target.value);
  };

  const handleChangTo = (e) => {
    setQueryTo(e.target.value);
    setTo(e.target.value);
  };

  const handleClick = () => {
    fetch("http://localhost:5000/appData", {
      method: "POST",
      body: JSON.stringify(myData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setMyData(iniState);
  };

 
  const {
    cityFrom,
    cityTo,
    date,
    qty,
    weight,
    dimensionsL,
    dimensionsW,
    dimensionsH,
  } = myData;

  return (
    <>
      <div className="mb-5">
        <p className="display-5 my-4 mb-5 text-center text-light">
          Compare, and <br />
          ship your parcels <b>cheaper!</b>
        </p>
        <div className="container bg-light p-3 formBox fs-5">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3">
                <p className="fs-2 myHeading">Your destination</p>

                <div>
                  <label htmlFor="" className="form-label">
                    Ship from
                  </label>
                  <div className="input-group mb-3 mySearchDiv">
                    <div>
                      <input
                        name="cityFrom"
                        // value={cityFrom}
                        value={from}
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="City Name"
                        // onChange={handleChang}
                        onChange={handleChangFrom}
                      />
                    </div>
                    <div>
                      {!queryFrom.trim() ? (
                        <></>
                      ) : loading ? (
                        <div className="suggestions mt-2">
                          <h4>Loading...</h4>
                        </div>
                      ) : error ? (
                        <div className="suggestions mt-2">
                          <h4>No match !</h4>
                        </div>
                      ) : (
                        <div className="suggestions">
                          <table className="table table-hover">
                            <tbody>
                              {data
                                ? data.map((el) => (
                                    <tr
                                      button
                                      onClick={() => {
                                        setFrom(`${el.Region}-${el.Pincode}`);
                                        setQueryFrom("");
                                      }}
                                      key={el.Pincode}
                                    >
                                      <td className="px-5">{el.Region}</td>
                                      <td className="px-5">{el.Pincode}</td>
                                    </tr>
                                  ))
                                : ""}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Ship to
                    </label>
                    <div
                      className="input-group mb-3 mySearchDiv"
                      style={{ display: "block" }}
                    >
                      <div>
                        <input
                          name="cityTo"
                          // value={cityTo}
                          value={to}
                          type="text"
                          className="form-control"
                          aria-label="Text input with dropdown button"
                          placeholder="City Name"
                          // onChange={handleChang}
                          onChange={handleChangTo}
                        />
                      </div>
                      <div>
                        {!queryTo.trim() ? (
                          <></>
                        ) : loading ? (
                          <div className="suggestions mt-2">
                            <h4>Loading...</h4>
                          </div>
                        ) : error ? (
                          <div className="suggestions mt-2">
                            <h4>No match !</h4>
                          </div>
                        ) : (
                          <div className="suggestions">
                            <table className="table table-hover">
                              <tbody>
                                {data
                                  ? data.map((el) => (
                                      <tr
                                        button
                                        onClick={() => {
                                          setTo(`${el.Region}-${el.Pincode}`);
                                          setQueryTo("");
                                        }}
                                        key={el.Pincode}
                                      >
                                        <td className="px-5">{el.Region}</td>
                                        <td className="px-5">{el.Pincode}</td>
                                      </tr>
                                    ))
                                  : ""}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Shipping date
                  </label>
                  <input
                    name="date"
                    value={date}
                    onChange={handleChang}
                    className="form-control"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <p className="fs-2 myHeading">Your shipment</p>
                <div className="input-group mb-3">
                  <div>
                    <label htmlFor="" className="form-label">
                      Qty?
                    </label>
                    <input
                      name="qty"
                      value={qty}
                      onChange={handleChang}
                      type="text"
                      className="form-control"
                      placeholder="Count"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Weight (kg)
                    </label>
                    <input
                      name="weight"
                      value={weight}
                      onChange={handleChang}
                      type="text"
                      className="form-control"
                      placeholder="/Unit"
                    />
                  </div>
                </div>
                <label htmlFor="" className="form-label">
                  Dimensions (cm)
                </label>
                <div className="input-group mb-3">
                  <input
                    name="dimensionsL"
                    value={dimensionsL}
                    onChange={handleChang}
                    type="text"
                    className="form-control"
                    placeholder="Length"
                  />
                  <input
                    name="dimensionsW"
                    value={dimensionsW}
                    onChange={handleChang}
                    type="text"
                    className="form-control"
                    placeholder="Width"
                  />
                  <input
                    name="dimensionsH"
                    value={dimensionsH}
                    onChange={handleChang}
                    type="text"
                    className="form-control"
                    placeholder="Hight"
                  />
                </div>

                <div className="myHomeBtn">
                  <button
                    type="submit"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={handleClick}
                  >
                    Get Your Parcels Cheaper Price
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen">
                      <div className="modal-content">
                        <div
                          className="modal-header"
                          style={{ backgroundColor: "#FF5151" }}
                        >
                          <h5
                            className="modal-title ps-5 text-light"
                            id="exampleModalLabel"
                          >
                            Time and price by all companies to deliver the
                            product.
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body myGrid myBackground">
                          <Delivery />
                          <Delivery />
                          <Delivery />
                          <Delivery />
                        </div>
                        {/* <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
