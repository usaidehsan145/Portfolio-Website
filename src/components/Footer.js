import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(30, 30, 30, 0.9)',
  backdropFilter: 'blur(8px)',
  padding: '10px 0',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  fontFamily: "'Courier New', monospace",
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const FooterTextMobile = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  fontFamily: "'Courier New', monospace",
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Muhammad Usaid. All Rights Reserved.
      </FooterText>
      <FooterTextMobile>
        © {new Date().getFullYear()} Usaid. All Rights Reserved.
      </FooterTextMobile>
    </FooterContainer>
  );
};

export default Footer;
