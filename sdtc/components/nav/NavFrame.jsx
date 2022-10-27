import ResponsiveAppBar from "./TopBar";
import TemporaryDrawer from "./Drawer";
import { useState } from "react";
import Footer from "./Footer";
import Box from "@mui/material/Box";
const NavFrame = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ResponsiveAppBar />
      <TemporaryDrawer open={open} handleClose={() => setOpen(false)} />
      <Box sx={{ margin: "8px 24px" }}>{children}</Box>
      <Footer open={open} handleOpen={() => setOpen(true)} />
    </div>
  );
};

export default NavFrame;
