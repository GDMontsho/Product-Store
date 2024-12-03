import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Switch,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const Header = ({ onToggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  const handleCreateProduct = () => {
    navigate("/create-product");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="h6"
            onClick={handleGoHome}
            sx={{ cursor: "pointer" }}
          >
            Product Store
          </Typography>

          <Stack direction="row" spacing={2}>
            <Tooltip title="Create Product">
              <IconButton color="inherit" onClick={handleCreateProduct}>
                <AddIcon />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              <Switch
                checked={isDarkMode}
                onChange={onToggleTheme}
                color="default"
              />
            </Tooltip>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
