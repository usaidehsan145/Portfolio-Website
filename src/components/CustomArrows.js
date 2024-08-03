// CustomArrows.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '10px', // Move left arrow slightly more left
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 40,
        height: 40,
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

export const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '10px', // Move right arrow slightly more right
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 40,
        height: 40,
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};
