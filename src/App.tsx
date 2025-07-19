import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MuiCard from "./components/MuiCard";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";
// import MuiSelect from "./components/MuiSelect";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiRating from "./components/MuiRating";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiLayout from "./components/MuiLayout";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiImageList from "./components/MuiImageList";
// import MuiLink from "./components/MuiLink";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiBreadcrumb from "./components/MuiBreadcrumb";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import MuiAvatar from "./components/MuiAvatar";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ paddingBottom: "66px" }}>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}

        {/* <MuiTextField />
      <MuiSelect /> */}

        {/* <MuiRadioButton /> */}

        {/* <MuiCheckbox /> */}

        {/* <MuiSwitch /> */}

        {/* <MuiRating /> */}

        {/* <MuiAutocomplete /> */}

        {/* <MuiLayout /> */}

        {/* <MuiCard /> */}

        {/* <MuiAccordion /> */}

        {/* <MuiImageList /> */}

        {/* <MuiNavbar /> */}

        {/* <MuiLink /> */}

        {/* <MuiBreadcrumb /> */}

        {/* <MuiDrawer /> */}

        {/* <MuiSpeedDial /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <MuiAvatar />

        <MuiBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
