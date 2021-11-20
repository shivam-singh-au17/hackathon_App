import React, { useState } from "react";
import { useFetch } from "../utils/useFetch";
import "./Home.css";

const Home = () => {
  const [queryTo, setQueryTo] = useState("");
  const [to, setTo] = useState("");
  console.log("to:", to);
  const [queryFrom, setQueryFrom] = useState("");
  const [from, setFrom] = useState("");
  console.log("city:", from);
  const { loading, error, data } = useFetch(
    `https://api.postalpincode.in/postoffice/${
      queryTo.trim() || queryFrom.trim()
    }`
  );
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
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                      placeholder="City Name"
                      value={from}
                      onChange={(e) => {
                        setQueryFrom(e.target.value);
                        setFrom(e.target.value);
                      }}
                    />
                    {!queryFrom.trim() ? (
                      <></>
                    ) : loading ? (
                      <div className="suggestions">
                        <h4>Loading...</h4>
                      </div>
                    ) : error ? (
                      <div className="suggestions">
                        <h4>No match !</h4>
                      </div>
                    ) : (
                      <div className="suggestions">
                        {data
                          ? data.map((el) => (
                              <li
                                button
                                onClick={() => {
                                  setFrom(`${el.Region}-${el.Pincode}`);
                                  setQueryFrom("");
                                }}
                                key={el.Pincode}
                              >
                                {el.Region} - {el.Pincode}
                              </li>
                            ))
                          : ""}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Ship to
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="City Name"
                        value={to}
                        onChange={(e) => {
                          setQueryTo(e.target.value);
                          setTo(e.target.value);
                        }}
                      />{" "}
                      <br />
                      {!queryTo.trim() ? (
                        <></>
                      ) : loading ? (
                        <div className="suggestions">
                          <h4>Loading...</h4>
                        </div>
                      ) : error ? (
                        <div className="suggestions">
                          <h4>No match !</h4>
                        </div>
                      ) : (
                        <div className="suggestions">
                          {data
                            ? data.map((el) => (
                                <li
                                  button
                                  onClick={() => {
                                    setTo(`${el.Region}-${el.Pincode}`);
                                    setQueryTo("");
                                  }}
                                  key={el.Pincode}
                                >
                                  {el.Region} - {el.Pincode}
                                </li>
                              ))
                            : ""}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Shipping date
                  </label>
                  <input className="form-control" type="date" />
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
                    type="text"
                    className="form-control"
                    placeholder="Length"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Width"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hight"
                  />
                </div>
                <div className="myHomeBtn">
                  <button>Get Your Parcels Cheaper Price</button>
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
