import React from 'react';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const DotContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(7),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Dot = styled('div')(({ active, theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[500],
  margin: theme.spacing(0, 1),
}));

const PaginationDots = ({ slideCount, currentSlide, goTo }) => {
  return (
    <DotContainer>
      {Array.from({ length: slideCount }).map((_, index) => (
        <Dot
          key={index}
          active={index === currentSlide}
          onClick={() => goTo(index)}
        />
      ))}
    </DotContainer>
  );
};

export default PaginationDots;
