import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import CodeBackground from './CodeBackground';

import NotaryImg from '../assets/notary.jpg';
import EcgImg from '../assets/ecg.jpg';
import RpsImg from '../assets/rps.jpg';
import RealEstateImg from '../assets/estate.jpg';
import EncryptImg from '../assets/encryption.jpg';
import ChurnImg from '../assets/churn.jpg';
import SpamImg from '../assets/spam.png';
import WeatherImg from '../assets/weather.jpg'

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled components
const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
}));

const ProjectContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    '&::after': {
      opacity: 1,
    },
    '& .github-icon': {
      opacity: 1,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
  zIndex: 1,
  fontFamily: 'Source Code Pro, monospace', // Applied font family
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  zIndex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: 'Courier New, monospace', // Applied font family
}));

const GithubIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
}));

const SliderArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  },
  '&.slick-prev': {
    left: -40,
  },
  '&.slick-next': {
    right: -40,
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  '& .slick-list': {
    margin: '0 -16px',
  },
  '& .slick-slide > div': {
    padding: '0 16px',
  },
}));

const projects = [
  { 
    id: 1, 
    title: 'NotaryNow', 
    description: 'Full-stack App for Secure Documents Notorization', 
    github: 'https://github.com/usaidehsan145',
    image: NotaryImg
  },
  { 
    id: 2, 
    title: 'ECG Outliers Detection', 
    description: 'Detecing anomalous ECG signals using LSTM autoencoders', 
    github: 'https://github.com/usaidehsan145/LSTM-Autoencoders-for-Anomaly-Detection-in-Electrocardiogram-ECG-Signals',
    image: EcgImg
  },
  { 
    id: 3, 
    title: 'Customer Churn Analysis', 
    description: 'Predicting Customers Churn using Machine Learning Techniques', 
    github: 'https://github.com/usaidehsan145/customer_churn_analysis',
    image: ChurnImg
  },
  { 
    id: 4, 
    title: 'Human vs AI Rock Paper Scissors Game', 
    description: 'Rock Paper Scissors Hand gesture Detection using CNN', 
    github: 'https://github.com/usaidehsan145/RPS_Gestures_Detection',
    image: RpsImg
  },
  { 
    id: 5, 
    title: 'Secure Sign PDF', 
    description: 'PDF secure digital signing using OpenSSL', 
    github: 'https://github.com/usaidehsan145/Secure-Sign-Pdf-using-openssl',
    image: EncryptImg
  },
  { 
    id: 6, 
    title: 'Spam Email Detection', 
    description: 'Predicting Spam Emails using Machine Learning Techniques', 
    github: 'https://github.com/usaidehsan145/spam-email-detection',
    image: SpamImg
  },
  { 
    id: 7, 
    title: 'Real Estate Price Prediction', 
    description: 'Predicting Real Estate Properties Prices using Machine Learning Techniques', 
    github: 'https://github.com/usaidehsan145/real-estate-price-prediction-system',
    image: RealEstateImg
  },
  { 
    id: 8, 
    title: 'Weather Forecast Application', 
    description: 'Javascript, HTML, CSS based Application for Weather Forecasting', 
    github: 'https://github.com/usaidehsan145/Weather-Forecast-App',
    image: WeatherImg
  },
];

const NextArrow = ({ onClick }) => (
  <SliderArrow onClick={onClick} sx={{ right: -50 }}>
    <ArrowForwardIosIcon />
  </SliderArrow>
);

const PrevArrow = ({ onClick }) => (
  <SliderArrow onClick={onClick} sx={{ left: -50 }}>
    <ArrowBackIosNewIcon />
  </SliderArrow>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <ProjectsSection id="projects">
      <CodeBackground />
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main', mb: 6, fontFamily: 'Source Code Pro, monospace' }}>
          My Projects
        </Typography>
        <Box sx={{ mx: { xs: 2, md: 4 } }}>
          <Slider {...settings}>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectContent sx={{ backgroundImage: `url(${project.image})` }}>
                  <ProjectTitle variant="h6">{project.title}</ProjectTitle>
                  <ProjectDescription variant="body2">{project.description}</ProjectDescription>
                  <GithubIconButton
                    className="github-icon"
                    aria-label="github link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </GithubIconButton>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Slider>
        </Box>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
