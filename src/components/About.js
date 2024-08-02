import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiPython, 
  SiExpress, 
  SiGithub, 
  SiGit, 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiStreamlit, 
  SiScikitlearn, 
  SiNumpy, 
  SiPandas 
} from 'react-icons/si';

// Styled components
const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 0),
  background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
}));

const StyledPaper = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiAvatar-root': {
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover .MuiAvatar-root': {
    transform: 'scale(1.1) rotate(5deg)',
  },
}));

const TechnologiesCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  textAlign: 'center',
  width: '100%',
  marginTop: theme.spacing(4),
}));

const IconGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
  '& > *': {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2) rotate(5deg)',
      color: theme.palette.primary.main,
    },
  },
}));

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{ color: 'primary.main', fontFamily: 'Source Code Pro, monospace', fontWeight: 'bold' }}
              >
                Who is Muhammad Usaid
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Courier New, monospace', lineHeight: 1.6 }}
              >
                Hello! I'm Muhammad Usaid, a data scientist with a focus on machine learning and deep learning, as well as a web developer. I enjoy working on projects that blend these two areas, crafting digital solutions that are both functional and user-friendly.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Courier New, monospace', lineHeight: 1.6 }}
              >
                My work involves applying clean coding practices and modern technologies to create effective and engaging web experiences. I’ve had the chance to work on a variety of projects, ranging from personal websites to more complex applications, always striving to deliver results that align with user needs and preferences.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Courier New, monospace', lineHeight: 1.6 }}
              >
                When I’m not immersed in coding or data analysis, you’ll find me exploring new design trends, contributing to open-source initiatives, or indulging in my passion for cricket. I also enjoy learning about new technologies and experimenting with new recipes in the kitchen. Balancing these interests keeps me inspired and motivated both personally and professionally.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {[
                { 
                  title: 'Education',
                  icon: <SchoolIcon />,
                  content: (
                    <>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 'bold' }}
                      >
                        Bachelors of Computer Science
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ fontFamily: 'Source Code Pro, monospace' }}
                      >
                        FAST National University
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'Courier New, monospace' }}
                      >
                        Graduated with a Bachelor of Computer Science, 2024
                      </Typography>
                    </>
                  )
                },
                { 
                  title: 'Career Highlights',
                  icon: <WorkIcon />,
                  content: (
                    <>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ fontFamily: 'Courier New, monospace' }}
                      >
                        • ML Engineer, building and deploying advanced models
                      </Typography>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ fontFamily: 'Courier New, monospace' }}
                      >
                        • Prompt Engineer, optimizing and refining AI solutions
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'Courier New, monospace' }}
                      >
                        • Software Engineer, developing and maintaining web apps
                      </Typography>
                    </>
                  )
                },
                { 
                  title: 'Work Philosophy',
                  icon: <EmojiObjectsIcon />,
                  content: (
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: 'Courier New, monospace' }}
                    >
                      I focus on creating solutions that are both practical and enjoyable to use. My work centers on user-friendly design, clean code, and ongoing learning. I'm always exploring new technologies and methods to improve what I do.
                    </Typography>
                  )
                },
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <StyledPaper
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconWrapper>
                      <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                        {item.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: 'Source Code Pro, monospace', fontWeight: 'bold' }}
                      >
                        {item.title}
                      </Typography>
                    </IconWrapper>
                    {item.content}
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={2} justifyContent="center" spacing={4}>
          <Grid item xs={12} md={10}>
            <TechnologiesCard>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: 'primary.main', fontFamily: 'Source Code Pro, monospace', fontWeight: 'bold' ,marginBottom: 3 }}
              >
                Technologies
              </Typography>
              <IconGrid>
                {[
                  { icon: <SiHtml5 style={{ color: '#E34F26', fontSize: '2.5rem' }} />, tech: 'HTML5' },
                  { icon: <SiCss3 style={{ color: '#1572B6', fontSize: '2.5rem' }} />, tech: 'CSS3' },
                  { icon: <SiJavascript style={{ color: '#F7E02F', fontSize: '2.5rem' }} />, tech: 'JavaScript' },
                  { icon: <SiReact style={{ color: '#61DAFB', fontSize: '2.5rem' }} />, tech: 'React' },
                  { icon: <SiNodedotjs style={{ color: '#8CC84B', fontSize: '2.5rem' }} />, tech: 'Node.js' },
                  { icon: <SiMongodb style={{ color: '#47A248', fontSize: '2.5rem' }} />, tech: 'MongoDB' },
                  { icon: <SiPostgresql style={{ color: '#336791', fontSize: '2.5rem' }} />, tech: 'PostgreSQL' },
                  { icon: <SiPython style={{ color: '#3776AB', fontSize: '2.5rem' }} />, tech: 'Python' },
                  { icon: <SiExpress style={{ color: '#000000', fontSize: '2.5rem' }} />, tech: 'Express' },
                  { icon: <SiGithub style={{ color: '#181717', fontSize: '2.5rem' }} />, tech: 'GitHub' },
                  { icon: <SiGit style={{ color: '#F05032', fontSize: '2.5rem' }} />, tech: 'Git' },
                  { icon: <SiTensorflow style={{ color: '#FF6F00', fontSize: '2.5rem' }} />, tech: 'TensorFlow' },
                  { icon: <SiPytorch style={{ color: '#EE4C2C', fontSize: '2.5rem' }} />, tech: 'PyTorch' },
                  { icon: <SiOpencv style={{ color: '#5C2D91', fontSize: '2.5rem' }} />, tech: 'OpenCV' },
                  { icon: <SiStreamlit style={{ color: '#FF4B4B', fontSize: '2.5rem' }} />, tech: 'Streamlit' },
                  { icon: <SiScikitlearn style={{ color: '#F7E6C4', fontSize: '2.5rem' }} />, tech: 'Scikit-Learn' },
                  { icon: <SiNumpy style={{ color: '#013243', fontSize: '2.5rem' }} />, tech: 'NumPy' },
                  { icon: <SiPandas style={{ color: '#150458', fontSize: '2.5rem' }} />, tech: 'Pandas' },
                ].map((item, index) => (
                  <Tooltip title={item.tech} key={index}>
                    <Box m={1} textAlign="center">
                      {React.cloneElement(item.icon, { style: { ...item.icon.props.style, fontSize: '2.5rem' } })}
                      <Typography variant="caption" display="block">
                        {item.tech}
                      </Typography>
                    </Box>
                  </Tooltip>
                ))}
              </IconGrid>
            </TechnologiesCard>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About;
