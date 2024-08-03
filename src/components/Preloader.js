// src/components/Preloader.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Preloader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default', // Use theme color
        display: 'flex',
        flexDirection: 'column', // Align spinner and text vertically
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3, // Increase margin-bottom to add space between spinner and text
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '5px solid transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: '#BB86FC', // Gradient color
            borderRightColor: '#03DAC6', // Gradient color
            borderWidth: '5px',
            animation: 'spin 1s linear infinite',
            background: 'linear-gradient(45deg, #BB86FC, #03DAC6, #BB86FC, #03DAC6)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'padding-box',
            backgroundClip: 'padding-box',
            maskImage: 'radial-gradient(circle, transparent 50%, black 51%)', // Hollow effect
            WebkitMaskImage: 'radial-gradient(circle, transparent 50%, black 51%)', // Hollow effect
          }}
        />
      </Box>
      <Typography
        variant="h4" // Increase the size
        component="div"
        sx={{
          fontFamily: '"Roboto Mono", monospace', // Coding-styled font
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #BB86FC, #03DAC6, #BB86FC, #03DAC6)', // Gradient colors from the theme
          backgroundSize: '400% 400%',
          animation: 'gradientShift 3s ease infinite',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2, // Margin-bottom
        }}
      >
        Loading
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{
          color: 'text.secondary', // Use theme color
        }}
      >
        {/* Additional text if needed */}
      </Typography>
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default Preloader;
