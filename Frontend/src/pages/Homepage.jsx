import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import CardList from "../components/CafeCard";
import FilterMenu from "../components/FilterMenu";
import SortMenu from "../components/SortMenu";

function Homepage() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100vw",
        height: "100vh",
      }}>
      <Navbar />
      <Grid container>
        <Grid item xs={1} />
        <Grid
          item
          xs={2}
          sx={{ display: "flex", flexDirection: "column"}}>
          <FilterMenu />
          <SortMenu />
        </Grid>
        <Grid item xs={8}>
          <CardList />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
}

export default Homepage;
