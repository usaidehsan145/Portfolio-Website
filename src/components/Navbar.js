import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Sidebar from './Sidebar'; // Import the Sidebar component
import { Link } from 'react-scroll';

const pages = ['About', 'Skills', 'Projects', 'Contact'];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(30, 30, 30, 0.9)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  height: '80px',
}));

const StyledToolbar = styled(Toolbar)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '8px 16px',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'Helvetica Neue, sans-serif',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'left',
  },
}));

const MotionButton = motion(StyledButton);

const GitHubButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '20px',
  fontFamily: 'Helvetica Neue, sans-serif',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const MotionGitHubButton = motion(GitHubButton);

const NameLogo = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '8px',
  background: 'rgba(0, 0, 0, 0.2)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const CodeLine = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.grey[400],
  fontFamily: "'Source Code Pro', monospace",
  marginBottom: '2px',
}));

const Cursor = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '8px',
  height: '24px',
  backgroundColor: theme.palette.primary.main,
  marginLeft: '4px',
  animation: 'blink 0.7s infinite',
  '@keyframes blink': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="xl">
          <StyledToolbar disableGutters>
            {/* Left Side: NameLogo for desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NameLogo
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CodeLine>{'// Initialize developer'}</CodeLine>
                <Box display="flex" alignItems="center">
                  <TypeAnimation
                    sequence={[
                      'const dev = "Muhammad Usaid";',
                      3000,
                      () => setShowCursor(false),
                      'const skills = ["React","Node","AI & ML"];',
                      3000,
                      'const passion = ["Web Dev", "Data Science"]',
                      3000,
                      () => setShowCursor(true),
                      'const dev = "Muhammad Usaid";',
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{ fontSize: '0.9rem', color: '#BB86FC', fontFamily: '"Source Code Pro", monospace' }}
                  />
                  {showCursor && (
                    <Cursor />
                  )}
                </Box>
              </NameLogo>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleSidebar}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Text */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center' ,backgroundColor: 'rgba(0, 0, 0, 0.2)',padding: '8px',borderRadius: '8px'}}>
              <Typography
                variant="body2"
                sx={{ fontSize: '0.75rem', color: '#bdbdbd', textAlign: 'center', fontFamily: '"Source Code Pro", monospace', fontSize: '0.65rem', }}
              >
                {'// Initialize developer'}
                <br />
                <span style={{ color: 'rgb(187, 134, 252)', fontSize: '0.65rem' }}>
                  {'const dev = "Usaid";'}
                </span>
              </Typography>
            </Box>

            {/* Right Side: Nav Buttons for desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <MotionButton
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 1 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={page.toLowerCase()} smooth={true} duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {page}
                  </Link>
                </MotionButton>
              ))}
              <MotionGitHubButton
                startIcon={<GitHubIcon />}
                href="https://github.com/usaidehsan145"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobile ? '' : 'GitHub'}
              </MotionGitHubButton>
            </Box>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
      <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
};

export default Navbar;
