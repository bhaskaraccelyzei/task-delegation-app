import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const CreateTask = () => {
  const [open, setOpen] = useState(true); // auto open when this tab is selected

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Create a New Task</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 2 }}>
        <TextField sx={{mt:"10px"}} label="Task Title" fullWidth />
        <TextField label="Description" multiline rows={4} fullWidth />
        <TextField select label="Priority" fullWidth>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <TextField type="date" label="Due Date" InputLabelProps={{ shrink: true }} />
      </DialogContent>
      <DialogActions sx={{mb:"20px"}}>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button variant="contained" color="primary">Create Task</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTask;
