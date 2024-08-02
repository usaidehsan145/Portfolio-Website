import React from 'react';
import { Typography, Box, Grid, IconButton, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

// Styled components
const DetailCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '80%',
  maxHeight: '80vh',
  width: '90%',
  maxWidth: '400px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  overflowY: 'auto',
  position: 'relative',
  margin: 'auto', // Center the card horizontally
  top: '10%', // Adjust position for mobile devices

  // Responsive adjustments
  [theme.breakpoints.up('md')]: {
    height: '100%',
    maxHeight: 'none',
    width: '100%',
    maxWidth: 'none',
    top: '0%', // Adjust position for desktop devices
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.grey[300],
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.primary.light,
  '& .MuiChip-icon': {
    color: theme.palette.secondary.light,
  },
}));

const SkillDetail = ({ skill, onClose, isFirstAppearance }) => {
  return (
    <DetailCard
      initial={isFirstAppearance ? { opacity: 0, x: 100 } : false}
      animate={isFirstAppearance ? { opacity: 1, x: 0 } : false}
      exit={false}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <Box sx={{ mb: 3 }}>
        {skill.icon}
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ color: 'primary.light', fontFamily: 'Source Code Pro, monospace' }}
        >
          {skill.name}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ color: 'text.secondary', fontFamily: 'Courier New, monospace' }}
        >
          {skill.description}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ color: 'secondary.light', fontFamily: 'Source Code Pro, monospace' }}
          >
            Key Skills
          </Typography>
          <Box>
            {skill.keySkills.map((item, index) => (
              <SkillChip
                key={index}
                label={item}
                icon={<StarIcon />}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ color: 'secondary.light', fontFamily: 'Source Code Pro, monospace' }}
          >
            Tools & Technologies
          </Typography>
          <Box>
            {skill.tools.map((item, index) => (
              <SkillChip
                key={index}
                label={item}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </DetailCard>
  );
};

export default SkillDetail;
