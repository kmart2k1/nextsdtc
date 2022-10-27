import ResponsiveAppBar from "./TopBar";
import TemporaryDrawer from "./Drawer";
import { useState } from "react";
import Footer from "./Footer";
import { Button } from "@mui/material";
const NavFrame = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ResponsiveAppBar />
      <TemporaryDrawer open={open} handleClose={() => setOpen(false)} />

      <Footer open={open} handleOpen={() => setOpen(true)} />
    </div>
  );
};

export default NavFrame;
