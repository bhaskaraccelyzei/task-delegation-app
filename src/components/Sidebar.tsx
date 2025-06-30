import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';


const Sidebar = () => {
    const theme = useTheme();

  return (
    <Box
  sx={{
    position: 'fixed',
    top: `${theme.mixins.toolbar.minHeight}px`, // below the header
    bottom: 0,
    left: 0,
    width: '64px',
    bgcolor: '#1976d2',
    display: 'flex',
    flexDirection: 'column',
    pt: theme.mixins.toolbar.minHeight,
    alignItems: 'center',
    py: 2,
  }}
>
  {/* Top icons */}
  <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
    <IconButton sx={{ color: '#fff' }}>
      <DashboardIcon />
    </IconButton>
    <IconButton sx={{ color: '#fff' }}>
      <AssignmentIcon />
    </IconButton>
  </Box>

  {/* Bottom icon (like Logout) */}
  <IconButton sx={{ color: '#fff' }}>
    <PeopleIcon />
  </IconButton>
</Box>

  );
};

export default Sidebar;
