import React from 'react';
import { styled } from '@mui/system';

const DotsContainer = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: -40
  },
}));

const Dot = styled('div')(({ active, theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[500],
  margin: theme.spacing(0, 1),
  
  transition: 'background-color 0.3s',
}));

const PaginationDots = ({ slides, activeIndex }) => (
  <DotsContainer>
    {slides.map((_, index) => (
      <Dot key={index} active={index === activeIndex} />
    ))}
  </DotsContainer>
);

export default PaginationDots;
