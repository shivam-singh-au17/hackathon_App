import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function TextRating() {
  
  let value = Math.random() * (5 - 3) + 3;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5} 
        size="small"
        
      />
      {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
    </Box>
  );
}