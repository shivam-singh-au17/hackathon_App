import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {

      const initValue = {
         "company_name":"",
        "company_logo":"",
        "pincodes_serving":[],
        "pricing":{}
        
    }

    const [formData, setFormData] = React.useState(initValue)

        const handleChange = (e) => {

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
            ...formData, [name]:  {"gte1000":value},
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
                onClick={()=>{
                    const data = {
                        company_name: formData.company_name,
                        company_logo: formData.company_logo,
                        pincodes_serving: formData.pincodes_serving,
                        pricing: formData.pricing,
                    }
                    fetch("https://mysterious-depths-33415.herokuapp.com/company/price",{
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })                                
                    console.log("formData", formData)
                }}
                >Submit</button>
            </form>
        </Typography>
      </Popover>
    </div>
  );
}