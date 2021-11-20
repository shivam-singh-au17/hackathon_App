import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {

      const initValue = {
         "company_name":"",
        "company_logo":"",
        "pincodes_serving":["422001", "123333"],
        "pricing":{"gte500": "",
                "gte1000" : "",
                "lt500" : "",
        },
         "trucks" : [ 
                    "61989af06d0a0337acdfec8a",
                    "6198b1fca42d78177cd4230a",
                    "6198b2d7a42d78177cd4230b",
                    "6198b2dfa42d78177cd4230c",
                    "6198b45ea42d78177cd4230d",
                    "6198b468a42d78177cd4230e"
                ]

    }

    const [formData, setFormData] = React.useState(initValue)

        const handleChange = (e) => {
            e.preventDefault();

        const {name, value, type, checked} = e.target;
        //console.log(e.target.checked)
        console.log(name, value, type)

        if(name === 'pincodes_serving')
        {
            setFormData({
            ...formData, [name]:  [value],
            }) 
        }
        else if(name === 'pricing')
        {
            setFormData({
            ...formData, [name]:  {"gte1000" : +value, "gte500": value-1, "lt500" : value-2 },
            }) 
        }
        else{
            setFormData({
                ...formData, [name]: type === "checkbox" ? checked : value,
            })
        }


       // setArr([...arr, formData])
    }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Be Our Delivery Partner
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
            <form>
                <label>Complany Name </label>
                <input onChange={handleChange} type="text" name="company_name" placeholder="Enter Company Name"/>
                <br />
                <label>Company Logo</label>
                <input onChange={handleChange} type="text" name="company_logo" placeholder="Enter Company Logo"/>
                <label>Pincodes</label>
                <input onChange={handleChange} type="text" name="pincodes_serving" placeholder="Enter pincode"/>
                <label>Price</label>
                <input onChange={handleChange} type="number" name="pricing" placeholder="Enter Price"/>
                <button 
                onClick={(e)=>{
                    e.preventDefault();
                    const data = {
                        company_name: formData.company_name,
                        company_logo: formData.company_logo,
                        pincodes_serving: formData.pincodes_serving,
                        pricing: formData.pricing,
                    }
                    fetch("http://localhost:5000/company",{
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    .then((res)=>console.log("working"))
                    .catch((err)=>console.log("error", err.message))
                    console.log("formData", formData)
                }}
                >Submit</button>
            </form>
        </Typography>
      </Popover>
    </div>
  );
}