import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import GetAppIcon from '@mui/icons-material/GetApp';
import resumeFile from '../uploads/your_resume.pdf';
import { Link } from 'react-scroll';
import ProfileImg from '../assets/profile.png';

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 64px)', // Adjust based on Navbar height
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '64px', // Ensure content appears below the Navbar
}));

const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  opacity: 0.1,
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    animation: 'float 15s infinite',
  },
  '&::before': {
    background: theme.palette.primary.main,
    left: '-150px',
    top: '-150px',
  },
  '&::after': {
    background: theme.palette.secondary.main,
    right: '-150px',
    bottom: '-150px',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0)',
    },
    '50%': {
      transform: 'translate(50px, 50px)',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '6px 16px',
  fontFamily: 'Helvetica Neue, sans-serif',
  fontSize: '0.75rem',
}));

const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  borderColor: 'purple',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  marginTop: '70px',
  marginBottom: '30px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '100%',
    height: '100%',
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: '50%',
    opacity: 0.7,
    zIndex: 0,
  },
  '& img': {
    width: '80%',
    height: 'auto',
    maxHeight: '80%',
    objectFit: 'contain',
    borderRadius: '10px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.37)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '30px', // Move the image further up on small screens
    '& img': {
      width: '80%', // Reduce the image size on small screens
    },
  },
}));

const BaseButton = styled(Button)(({ theme }) => ({
  padding: '6px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontFamily: 'Helvetica Neue, sans-serif',
  fontSize: '0.75rem',
}));

const ResumeButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
  },
}));

const WorkButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  justifyContent: 'flex-start',
}));

const MotionWorkButton = motion(WorkButton);
const MotionResumeButton = motion(ResumeButton);

const Hero = () => {
  const handleDownloadResume = () => {
    fetch(resumeFile)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Muhammad_Usaid_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading the resume:', error);
      });
  };

  return (
    <HeroContainer id="hero">
      <AnimatedBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '3.5rem', lg: '5rem' },
                  marginBottom: '20px',
                  marginTop: '30px',
                  background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Source Code Pro, monospace',
                }}
              >
                I'm Usaid
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.primary',
                  marginBottom: '20px',
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.5rem', lg: '3rem' },
                }}
              >
                A{' '}
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'Problem Solver',
                    2000,
                    'Data Scientist',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ color: '#03DAC6' }}
                />
              </Typography>
              <ButtonContainer>
                <Link to="projects" smooth={true} duration={500}>
                  <MotionWorkButton
                    variant="contained"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </MotionWorkButton>
                </Link>
                <MotionResumeButton
                  variant="outlined"
                  startIcon={<GetAppIcon />}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                >
                  Get Resume
                </MotionResumeButton>
              </ButtonContainer>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <HeroImage>
                <img
                  src={ProfileImg}
                  alt="Developer working on laptop"
                />
              </HeroImage>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
