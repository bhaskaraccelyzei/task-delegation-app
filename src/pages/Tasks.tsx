import { Box, Grid, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import CreateTask from '../components/Tasks/CreateTask';
import AllTasks from '../components/Tasks/AllTasks';
import MyTasks from '../components/Tasks/MyTasks';

const Tasks = () => {
    const [selectedTab, setSelectedTab] = useState('all');

  return (
    <Box sx={{
      // minHeight:"100vh",
      pl: "64px",
      pt: "64px",
      overflow: 'auto',
      boxSizing: "border-box",
      width: "100%",
      height:"100vh",
      display: 'flex',
      flexDirection:"column"
      // justifyContent:"space-evenly"


    }}>
      <Grid container sx={{ minHeight: 'calc(100vh - 64px)',width:"100%" }}>
  {/* Left Menu Column */}
  <Grid
    item
    xs={12}
    sm={4}
    md={3}
    sx={{
      background: 'linear-gradient(135deg, #1565c0, #1976d2)',
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
      width:"300px",
      color:"#0d47a1"
    }}
  >
   <List>
  {[
    { key: 'create', label: 'Create Task' },
    { key: 'all', label: 'All Tasks' },
    { key: 'mine', label: 'My Tasks' },
  ].map((item) => (
    <ListItemButton
    key={item.key}
    selected={selectedTab === item.key}
    onClick={() => setSelectedTab(item.key)}
    sx={{
      borderRadius: 2,
      mb: 1,
      bgcolor: selectedTab === item.key ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
      color: '#ffffff',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.2)',
        transform: 'scale(1.02)',
      },
      transition: 'all 0.3s ease',
      fontWeight: selectedTab === item.key ? 'bold' : 400,
      px: 2,
      py: 1.5,
    }}
    
    
    
    >
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 16,
        }}
      />
    </ListItemButton>
  ))}
</List>

  </Grid>

  {/* Right Content Column */}
  <Grid
    item
    xs={12}
    sm={8}
    md={9}
    sx={{
      padding: 2,
      flexGrow:1
    }}
    
  >
    {selectedTab === 'create' && <CreateTask />}
    {selectedTab === 'all' && <AllTasks />}
    {selectedTab === 'mine' && <MyTasks />}
  </Grid>
</Grid>


</Box>
  )
}

export default Tasks
