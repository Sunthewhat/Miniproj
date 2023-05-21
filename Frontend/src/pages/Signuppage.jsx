import { Box, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";

export default function Signuppage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0px",
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
              margin: "0"
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
                  // value={newNote.title}
                  // onChange={handleChange}
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
                  // value={newNote.title}
                  // onChange={handleChange}
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
                  // value={newNote.title}
                  // onChange={handleChange}
                  // error={!!error.title}
                  // helperText={error.title}
                />
              </Box>
              <Box sx={{
                marginBottom:"4vh",
              }}></Box>
              <Box
                sx={{
                  textAlign: "center",
                }}>
                <CustomButton text="Log In" fontSize={20} color={"#3A98B9"} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
