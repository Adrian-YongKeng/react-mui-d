import { Typography } from "@mui/material";
import MuiTable from "../components/MuiTable";
import MuiProgress from "../components/MuiProgress";

const Home = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>

      <Typography variant="body1">
        Welcome to the Home page! This is the main landing page of the app.
      </Typography>

      <MuiProgress />

      <MuiTable />
    </div>
  );
};

export default Home;
