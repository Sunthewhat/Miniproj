import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import FilterMenu from "../components/FilterMenu";
import SortMenu from "../components/SortMenu";
import Layout from "../components/Layout";
import api from "../axios";
import { useEffect, useState } from "react";
import CafeCard from "../components/CafeCard";

function Homepage() {
  const [cafe, setCafe] = useState([]);
  const [uid, setUid] = useState();
  useEffect(() => {
    fetchCafe();
  }, []);

  const fetchCafe = async () => {
    try {
      const data = await api.get(`/cafe`);
      setCafe(data.data.data);
      setUid(data.data.userId);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Layout isProtected>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100vw",
          height: "100vh",
        }}>
        <Navbar />
        <Grid container>
          <Grid item xs={2} sx={{ display: "flex", flexDirection: "column" }}>
            {/* <FilterMenu /> */}
            {/* <SortMenu /> */}
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              marginTop={"8vh"}
              direction="column"
              justifyContent="flex-start"
              alignItems="center">
              {cafe.map((e) => {
                return <CafeCard data={e} id={uid} />;
              })}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Box>
    </Layout>
  );
}

export default Homepage;
