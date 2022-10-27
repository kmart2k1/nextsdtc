import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
const Footer = ({ open, handleOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "flex", md: "none" },
        bottom: 0,
        top: "auto",
        backgroundColor: "#ffffff",
      }}
    >
      <IconButton size="large" color="primary" onClick={handleOpen}>
        <MenuOutlined fontSize="large" />
      </IconButton>
    </AppBar>
  );
};

export default Footer;
