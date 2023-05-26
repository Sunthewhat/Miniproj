import { Box, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import api from "../axios";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    // console.log(username);
    // console.log(password);
    try {
      const res = api.post("/login", { username, password });
      console.log(res.data);
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#E8D5C4",
      }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center">
        <Grid item sx={4} sm={10} md={4}>
          <Box>
            {/* Left components */}
            <Box>
              <Typography
                align="center"
                sx={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: { xl: "100px", md: "80px", xs: "60px" },
                  fontWeight: "bold",
                  color: "#3A98B9",
                }}>
                Pet World
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Right components */}
        <Grid item xs={4} sm={10} md={4}>
          <Box
            sx={{
              backgroundColor: "#FFF1DC",
              padding: { xl: "40px", md: "30px", xs: "20px" },
              maxWidth: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                Log In
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
                  // error={!!error.title}
                  // helperText={error.title}
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
                  // error={!!error.title}
                  // helperText={error.title}
                />
                <Box
                  sx={{
                    fontFamily: "'Fira code',monospace",
                    fontSize: { xl: "20px", md: "20px", xs: "15px" },
                    fontWeight: "bold",
                    color: "#868686",
                    padding: "5% 5% 5% 0%",
                  }}>
                  <input type="checkbox" />
                  Remember me
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}>
                <CustomButton
                  text="Log In"
                  fontSize={20}
                  color={"#3A98B9"}
                  handle={login}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "'Fira code',monospace",
                    fontSize: { xl: "20px", md: "20px", xs: "15px" },
                    fontWeight: "bold",
                    color: "#868686",
                  }}>
                  Sign Up
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Loginpage;
