import { Box, Button, Card, Grid, Typography } from "@mui/material";

const AllTeams = () => {
    const teams = [
        {
          id: 1,
          name: "Frontend Devs",
          description: "React & Angular specialists",
          members: ["John", "Jane", "Alex"],
        },
        {
          id: 2,
          name: "Backend Ninjas",
          description: "Node, Django, and Java experts",
          members: ["Ravi", "Anu"],
        },
      ];
      
    return (
      <div>
        <Grid container spacing={3}>
  {teams.map((team) => (
    <Grid item xs={12} sm={6} md={4} key={team.id}>
      <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {team?.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {team?.description}
        </Typography>

        <Typography variant="caption" color="primary">
          {team?.members.length} members
        </Typography>

        <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
          <Button size="small" variant="outlined" color="primary">
            Edit
          </Button>
          <Button size="small" variant="outlined" color="error">
            Delete
          </Button>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>

      </div>
    )
  }
  
  export default AllTeams