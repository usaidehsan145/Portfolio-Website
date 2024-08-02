import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import SkillDetail from './SkillDetail';
import AnimatedBackground from './AnimatedBackgrounds';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SkillsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center items vertically
  alignItems: 'center',     // Center items horizontally
  padding: theme.spacing(10, 0),
  position: 'relative',
}));

const SkillCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2),
  aspectRatio: '1 / 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  cursor: 'pointer',
  marginBottom: '-100px',
}));

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
}));

const skillCategories = [
  {
    name: 'Web Development',
    icon: <LanguageIcon sx={{ fontSize: 40 }} />,
    description: 'Building responsive and dynamic web applications using modern frameworks and technologies.',
    keySkills: ['Front-end Development', 'Back-end Development', 'RESTful APIs', 'Databases'],
    tools: [
      'React',
      'Node.js',
      'Express',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'Firebase',
      'SQL server',
      'MongoDB',
      'PostgreSQL',
    ],
  },
  {
    name: 'Data Science',
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    description: 'Analyzing and interpreting complex data to help make informed business decisions.',
    keySkills: ['Data Analysis', 'Machine Learning', 'Deep Learning', 'Statistical Modeling', 'Data Visualization'],
    tools: ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Tableau'],
  },
  {
    name: 'Programming Languages',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    description: 'Proficient in multiple programming languages for various application development needs.',
    keySkills: ['Object-Oriented Programming', 'Functional Programming', 'Scripting', 'Algorithm Design'],
    tools: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
  },
  {
    name: 'Dev Tools',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    description: 'Utilizing a variety of development tools and platforms to enhance and streamline the development process.',
    keySkills: ['Code Editing', 'Git and Github', 'Integrated Development Environments (IDEs)', 'Network Analysis'],
    tools: ['VS Code', 'Google Colab', 'Jupyter Notebook', 'PyCharm', 'Visual Studio', 'Wireshark'],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isFirstAppearance, setIsFirstAppearance] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (selectedSkill) {
      setIsFirstAppearance(false);
    }
  }, [selectedSkill]);

  const handleClose = () => {
    setSelectedSkill(null);
  };

  useLayoutEffect(() => {
    // Force Swiper to update on initial load
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [swiperInstance]);

  const handleSwiper = (swiper) => {
    console.log('Swiper instance:', swiper);
    setSwiperInstance(swiper);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <SkillsContainer id="skills">
      <AnimatedBackground />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: 'primary.main', mt: -20, mb: 8, fontFamily: 'Source Code Pro, monospace' }}
        >
          My Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={selectedSkill ? 6 : 12}>
            {isMobile ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={handleSwiper}
                style={{ width: '100%' }}
              >
                {skillCategories.map((category) => (
                  <SwiperSlide key={category.name}>
                    <SkillCard
                      onClick={() => setSelectedSkill(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      layout
                      transition={{
                        layout: { duration: 0.6, type: 'spring' },
                        scale: { duration: 0.3 },
                      }}
                    >
                      {category.icon}
                      <Typography
                        variant="subtitle1"
                        sx={{ mt: 2, textAlign: 'center', fontFamily: 'Source Code Pro, monospace' }}
                      >
                        {category.name}
                      </Typography>
                    </SkillCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Grid container spacing={3} justifyContent="center">
                {skillCategories.map((category) => (
                  <Grid item xs={selectedSkill ? 6 : 3} sm={selectedSkill ? 6 : 3} key={category.name}>
                    <SkillCard
                      onClick={() => setSelectedSkill(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      layout
                      transition={{
                        layout: { duration: 0.6, type: 'spring' },
                        scale: { duration: 0.3 },
                      }}
                    >
                      {category.icon}
                      <Typography
                        variant="subtitle1"
                        sx={{ mt: 2, textAlign: 'center', fontFamily: 'Source Code Pro, monospace' }}
                      >
                        {category.name}
                      </Typography>
                    </SkillCard>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
          <AnimatePresence>
            {selectedSkill && isMobile && (
              <OverlayContainer>
                <SkillDetail skill={selectedSkill} onClose={handleClose} isFirstAppearance={isFirstAppearance} />
              </OverlayContainer>
            )}
            {selectedSkill && !isMobile && (
              <Grid item xs={12} md={6}>
                <SkillDetail skill={selectedSkill} onClose={handleClose} isFirstAppearance={isFirstAppearance} />
              </Grid>
            )}
          </AnimatePresence>
        </Grid>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
