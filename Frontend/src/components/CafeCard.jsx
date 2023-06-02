import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import api from "../axios";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function CafeCard(props) {
  const [isEditable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDelete, setDelete] = useState(false);
  useEffect(() => {
    setEditable(false);
    setTitle(props?.data.name);
    setDescription(props?.data.description);
    if (props?.id == props?.data.user_id) setEditable(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    const send = { name: title, description: description };
    try {
      await api.patch(`/cafe/${props.data.id}`, send);
      console.log("patched");
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  const handleDelete = async () => {
    setDelete(true);
    try {
      await api.delete(`/cafe/${props.data.id}`);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <>
      {!isDelete ? (
        <Grid item xs={12} sx={{ backgroundColor: "#D9D9D9" }} margin={"20px"}>
          <Box height={"17vh"} width={"600px"}>
            <Typography
              sx={{
                color: "#3A98B9",
                fontFamily: "'Roboto', monospace",
                fontWeight: "bold",
                fontSize: "3vh",
              }}>
              {title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "'Roboto', monospace",
                fontSize: "1.5vh",
              }}>
              {description}
            </Typography>
            <Grid container>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}>
                {isEditable ? (
                  <div>
                    <CustomButton
                      text="Edit"
                      fontSize={10}
                      color={"#3A98B9"}
                      handle={handleClickOpen}
                    />
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Edit your Cafe</DialogTitle>
                      <DialogContent>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="name"
                          type="name"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          fullWidth
                          variant="standard"
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="description"
                          type="description"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} style={{ color: "Grey" }}>
                          Cancel
                        </Button>
                        <Button onClick={handleDelete} style={{ color: "Red" }}>
                          Delete
                        </Button>
                        <Button onClick={handleConfirm}>Confirm</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      ) : null}
    </>
  );
}
