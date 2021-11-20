import React from "react";
import "./Home.css";

const Home = () => {
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
                    />
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
                      />
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
