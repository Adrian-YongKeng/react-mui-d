import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const MuiBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/favorites":
        setValue(1);
        break;
      case "/profile":
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        // position: "absolute",
        position: "fixed",
        bottom: 0,
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);

        switch (newValue) {
          case 0:
            navigate("/");
            break;
          case 1:
            navigate("/favorites");
            break;
          case 2:
            navigate("/profile");
            break;
        }
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />

      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
