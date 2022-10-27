import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import { CloseOutlined } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
const DrawerText = styled(ListItemText)(() => ({
  fontSize: "24px",
}));

const TCList = styled(List)(() => ({
  height: "calc(100vh)",
}));

const TemporaryDrawer = ({ open, handleClose }) => {
  return (
    <div>
      <React.Fragment>
        <Drawer anchor="bottom" open={open} onClose={handleClose}>
          <TCList>
            {[
              "Volunteer",
              "Elite",
              "Support",
              "About",
              "News",
              "Events",
              "Train",
              "Youth",
              "Membership",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <DrawerText disableTypography primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </TCList>
          <AppBar
            position="fixed"
            sx={{ bottom: 0, top: "auto", backgroundColor: "#ffffff" }}
          >
            <IconButton color="primary" onClick={handleClose}>
              <CloseOutlined fontSize="large" />
            </IconButton>
          </AppBar>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
