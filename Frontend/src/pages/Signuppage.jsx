import { Box, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import api from "../axios";
import { useState } from "react";
import { AxiosError } from "axios";

export default function Signuppage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passerror, setPasserror] = useState("");

  const validate = () => {
    setPasserror("");
    if (password !== repassword) {
      setPasserror("Password does not match");
      return false;
    }
    return true;
  };
  const signup = async () => {
    try {
      if (!validate()) return;
      await api.post("/register", { username, password });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0px",
        backgroundColor: "#E8D5C4",
      }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        {/* Right components */}
        <Grid item sx={4}>
          <Box
            sx={{
              backgroundColor: "#FFF1DC",
              padding: { xl: "40px", md: "30px", xs: "20px" },
              maxWidth: "400px",
              width: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
            }}>
            <Box
              sx={{
                width: "100%",
              }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "'Fira code',monospace",
                  fontSize: { xl: "60px", md: "40px", xs: "40px" },
                  fontWeight: "bold",
                  color: "#868686",
                  marginBottom: "5vh",
                }}>
                Sign Up
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Fira code',monospace",
                    fontSize: { xl: "30px", md: "30px", xs: "20px" },
                    fontWeight: "bold",
                    color: "#868686",
                    margin: "0px",
                    padding: "0px",
                  }}>
                  Username
                </Typography>
                <TextField
                  required
                  margin="dense"
                  id="textfield"
                  name="username"
                  label=""
                  fullWidth
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  // error={!!passerror}
                  // helperText={passerror}
                />
                <Typography
                  sx={{
                    fontFamily: "'Fira code',monospace",
                    fontSize: { xl: "30px", md: "30px", xs: "20px" },
                    fontWeight: "bold",
                    color: "#868686",
                  }}>
                  Password
                </Typography>
                <TextField
                  required
                  margin="dense"
                  id="textfield"
                  name="password"
                  label=""
                  fullWidth
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  error={!!passerror}
                  helperText={passerror}
                />
                <Typography
                  sx={{
                    fontFamily: "'Fira code',monospace",
                    fontSize: { xl: "30px", md: "30px", xs: "20px" },
                    fontWeight: "bold",
                    color: "#868686",
                  }}>
                  Confirm Password
                </Typography>
                <TextField
                  required
                  margin="dense"
                  id="textfield"
                  name="password"
                  label=""
                  fullWidth
                  variant="outlined"
                  value={repassword}
                  onChange={(e) => {
                    setRepassword(e.target.value);
                  }}
                  error={!!passerror}
                  helperText={passerror}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: "4vh",
                }}></Box>
              <Box
                sx={{
                  textAlign: "center",
                }}>
                <CustomButton
                  text="Sign Up"
                  fontSize={20}
                  color={"#3A98B9"}
                  handle={signup}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
