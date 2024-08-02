import React from 'react';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const BackgroundContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflow: 'hidden',
});

const GradientBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
}));

const Particle = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.primary.main,
  borderRadius: '50%',
  opacity: 0.2,
}));

const AnimatedBackground = () => {
  const particles = new Array(20).fill(null);

  return (
    <BackgroundContainer>
      <GradientBackground />
      {particles.map((_, index) => (
        <Particle
          key={index}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;