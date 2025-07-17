import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MuiNavbar = () => {
  // Type: null | HTMLElement (TypeScript union type):
  //   null: The menu is not anchored to any element (i.e., it’s closed).
  //   HTMLElement: A reference to a DOM element (e.g., the "Resources" button) where the menu will appear.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // handleClick sets anchorEl = event.currentTarget (the <button>), ensuring the Menu anchors to the button, not the icon or text.
  // Using event.target could anchor the menu to a child element (e.g., the icon), causing incorrect positioning (e.g., the menu appearing offset from the button).
  // event.currentTarget ensures consistent anchoring to the entire button.

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu Closed:
  // anchorEl = null.
  // open = false.
  // Menu is not rendered.

  // Menu Open:
  // User clicks the "Resources" button.
  // anchorEl is set to the button’s DOM element.
  // open = true.
  // Menu renders, anchored to the button’s bottom-right corner.

  return (
    //position default is fixed
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMENAPP
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>

        {/* open={Boolean(anchorEl)}: Ensures the menu is only visible when anchorEl is not null. */}
        {/* anchorEl={anchorEl}: Positions the menu relative to the DOM element stored in anchorEl. */}

        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
