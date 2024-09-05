import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Typography, TextField, Button, Box, Grid, IconButton, InputAdornment, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

const shakeAnimation = {
  '@keyframes shake': {
    '0%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-5px)' },
    '50%': { transform: 'translateX(0)' },
    '75%': { transform: 'translateX(5px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '&:hover': {
    animation: 'shake 0.5s',
  },
};

const ContactSection = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_3xc935t', 'template_mrcrcpo', form.current, '4bMw8yMaDcBd68mey')
        .then(
          () => {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
            form.current.reset(); // Reset form fields
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <Box 
      id="contact"
      component={motion.div}
      variants={backgroundVariants}
      animate="animate"
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 6 },
        background: 'linear-gradient(45deg, #121212 25%, #1E1E1E 25%, #1E1E1E 50%, #121212 50%, #121212 75%, #1E1E1E 75%, #1E1E1E 100%)',
        backgroundSize: '400% 400%',
        mb: 5
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              color: 'primary.main', 
              mb: 8, 
              position: 'relative', 
              zIndex: 1,
              fontFamily: "'Courier New', monospace",
              fontSize: {
                xs: '2rem', // Adjust size for mobile devices
                sm: '2.5rem',   // Adjust size for small screens
                md: '2.5rem', // Adjust size for medium screens and above
                lg: '3rem',   // Adjust size for large screens
                xl: '3.5rem'  // Adjust size for extra-large screens
              },
            }}
          >
            Get In Touch
          </Typography>
          
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                style={{ height: '100%' }}
              >
                <Box 
                  sx={{
                    background: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: { xs: 2, sm: 3 },
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 6px 40px rgba(0, 0, 0, 0.2)',
                    },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: "'Courier New', monospace",
                    ml: { md: 4 },
                  }}
                >
                                <form 
                ref={form} 
                onSubmit={sendEmail}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  margin="normal"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={{ mb: 2, fontFamily: "'Courier New', monospace" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ mb: 2, fontFamily: "'Courier New', monospace" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={3}
                  margin="normal"
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message}
                  sx={{ mb: 2, flex: 1, fontFamily: "'Courier New', monospace" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  fullWidth
                  size="large"
                  sx={{ fontFamily: "'Courier New', monospace" }}
                >
                  Send Message
                </Button>
              </form>
                </Box>
              </motion.div>
            </Grid>


            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <Box sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  padding: { xs: 2, sm: 3 },
                  alignItems: 'right',
                  ml: { md: 20 },
                  fontFamily: "'Courier New', monospace",
                  fontSize: { xs: 'body2.fontSize', sm: 'body1.fontSize' }
                }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontFamily: "'Courier New', monospace", mb:4 }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                   sx={{
    display: 'flex',
    alignItems: 'center',
    mb: 4,
    fontFamily: "'Courier New', monospace",
    transition: 'transform 0.3s ease', // Smooth transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Slightly larger on hover
    },
  }}
>
    <PhoneIcon sx={{ color: 'primary.main', mr: 1 }} />
    +92 334 4619036
  </Typography>
  <Typography
    variant="body1"
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 4,
      fontFamily: "'Courier New', monospace",
      transition: 'transform 0.3s ease', // Smooth transition effect
      '&:hover': {
        transform: 'scale(1.05)', // Slightly larger on hover
      },
    }}
  >
    <EmailIcon sx={{ color: 'primary.main', mr: 1 }} />
    usaidehsan01@gmail.com
  </Typography>
  <Typography
    variant="body1"
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 4,
      fontFamily: "'Courier New', monospace",
      transition: 'transform 0.3s ease', // Smooth transition effect
      '&:hover': {
        transform: 'scale(1.05)', // Slightly larger on hover
      },
    }}
  >
    <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
    Lahore, Pakistan
  </Typography>
</Box>

                </Box>
                <Box>
      <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontFamily: "'Courier New', monospace", mb:4 }}>
        Follow Me
      </Typography>
      <Box sx={{ display: 'flex', gap: 3.5 }}>
        <IconButton color="primary" href="https://www.linkedin.com/in/muhammad-usaid-029b8b264/" target="_blank" aria-label="LinkedIn" sx={shakeAnimation}>
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" href="https://github.com/usaidehsan145" target="_blank" aria-label="GitHub" sx={shakeAnimation}>
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary" href="https://www.threads.net/@__usaidehsan__" target="_blank" aria-label="Twitter" sx={shakeAnimation}>
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" href="https://www.facebook.com/muhammad.usaid.37604" target="_blank" aria-label="Facebook" sx={shakeAnimation}>
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" href="https://www.instagram.com/__usaidehsan__/" target="_blank" aria-label="Instagram" sx={shakeAnimation}>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={isSubmitted}
          autoHideDuration={6000}
          message="Message sent successfully!"
          action={
            <Button color="inherit" onClick={() => setIsSubmitted(false)}>
              Close
            </Button>
          }
        />
      </Container>
    </Box>
  );
};

export default ContactSection;
