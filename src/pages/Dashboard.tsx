import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

// import Sidebar from '../components/Sidebar'; // Include if you're using it

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pl:"80px",
        pt: "80px",
        boxSizing: "border-box",
        backgroundColor: "#f5f5f5", 
        width: "100%",
        height:"100vh", // Full height of the viewport
      }}
    >
      <Typography variant="h5" mb={3} fontWeight="bold">
        Dashboard Overview
      </Typography>

      <Grid container spacing={12} justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={6}>
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,

              display: "flex",

              flexDirection: "column",
              justifyContent: "space-between", // spread out
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon fontSize="large" color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>

            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,

              display: "flex",
              flexDirection: "column",
              // width: 300, height: 250 ,
              justifyContent: "space-between", // spread out
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon fontSize="large" color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>

            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,

              display: "flex",
              flexDirection: "column",
              // width: 300, height: 250,
              justifyContent: "space-between", // spread out
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon fontSize="large" color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>

            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,

              display: "flex",
              flexDirection: "column",
              // width: 300, height: 250 ,
              justifyContent: "space-between", // spread out
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon fontSize="large" color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>

            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,

              display: "flex",
              flexDirection: "column",
              // width: 300, height: 250 ,
              justifyContent: "space-between", // spread out
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon fontSize="large" color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>

            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
    //   </Box>
    // </Box>
  );
};

export default Dashboard;
