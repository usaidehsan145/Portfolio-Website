import React, { useEffect, useRef } from 'react';
import { Drawer, List, ListItem, Button, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-scroll';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 250,
  background: 'rgba(30, 30, 30, 0.8)',  // Slightly more opaque background
  backdropFilter: 'blur(12px)',            // Increased blur effect
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',  // Slightly more pronounced shadow
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  position: 'relative',
  overflowY: 'auto',
  overflow: 'hidden',  // Hide overflowing content
  transition: 'transform 0.3s ease',
}));

const SidebarButton = styled(Button)(({ theme }) => ({
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

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const sidebarRef = useRef(null);

  // Close sidebar when scrolling or clicking outside
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          background: 'transparent',  // Transparent drawer background
        },
      }}
    >
      <SidebarContainer ref={sidebarRef}>
        <List>
          {['About', 'Skills', 'Projects', 'Contact'].map((page) => (
            <ListItem button key={page} onClick={onClose}>
              <Link to={page.toLowerCase()} smooth={true} duration={500} style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}>
                <SidebarButton>
                  {page}
                </SidebarButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 2 }}>
          <Button
            startIcon={<GitHubIcon />}
            href="https://github.com/usaidehsan145"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
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
            }}
          >
            GitHub
          </Button>
        </Box>
      </SidebarContainer>
    </Drawer>
  );
};

export default Sidebar;
