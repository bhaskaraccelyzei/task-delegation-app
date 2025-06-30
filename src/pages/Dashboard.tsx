import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import useTheme
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Sidebar from '../components/Sidebar'; // Include if you're using it

const Dashboard = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",

            }}
        >
            <Header /> 

            <Box
                sx={theme.mixins.toolbar}
            >
                <Sidebar />
                <Box sx={{
                    overflow:"hidden",

                }}>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;