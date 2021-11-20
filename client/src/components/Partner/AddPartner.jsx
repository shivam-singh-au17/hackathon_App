import * as React from "react";

const AddPartner = () => {

   const initValue = {
     company_name: "",
     company_logo: "",
     pincodes_serving: ["422001", "123333"],
     pricing: { gte500: "", gte1000: "", lt500: "" },
     trucks: [
       "61989af06d0a0337acdfec8a",
       "6198b1fca42d78177cd4230a",
       "6198b2d7a42d78177cd4230b",
       "6198b2dfa42d78177cd4230c",
       "6198b45ea42d78177cd4230d",
       "6198b468a42d78177cd4230e",
     ],
   };

   const [formData, setFormData] = React.useState(initValue);

   const handleChange = (e) => {
     e.preventDefault();

     const { name, value, type, checked } = e.target;
     //console.log(e.target.checked)
     console.log(name, value, type);

     if (name === "pincodes_serving") {
       setFormData({
         ...formData,
         [name]: [value],
       });
     } else if (name === "pricing") {
       setFormData({
         ...formData,
         [name]: { gte1000: +value, gte500: value - 1, lt500: value - 2 },
       });
     } else {
       setFormData({
         ...formData,
         [name]: type === "checkbox" ? checked : value,
       });
     }

     // setArr([...arr, formData])
   };


  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Become one of our partners
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <label className="form-label">Complany Name </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                name="company_name"
                placeholder="Enter Company Name"
              />
              <label className="form-label">Company Logo</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                name="company_logo"
                placeholder="Enter Company Logo Link"
              />
              <label className="form-label">Pincodes</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                name="pincodes_serving"
                placeholder="Enter pincode"
              />
              <label className="form-label">Price</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control mb-2"
                name="pricing"
                placeholder="Enter Price"
              />
              <button
                className="btn btn-primary my-2"
                style={{float:"right"}}
                onClick={(e) => {
                  e.preventDefault();
                  const data = {
                    company_name: formData.company_name,
                    company_logo: formData.company_logo,
                    pincodes_serving: formData.pincodes_serving,
                    pricing: formData.pricing,
                  };
                  fetch("http://localhost:5000/company", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => alert("working"))
                    .catch((err) => alert(err.message));
                  console.log("formData", formData);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPartner;
