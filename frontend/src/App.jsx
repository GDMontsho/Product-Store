import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/AppBar";
import HomePage from "./components/pages/HomePage";
import CreateProductPage from "./components/pages/CreateProductPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products, setProducts] = useState([]); // Manage the list of products

  // Toggle theme state
  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Add a new product to the list
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Create MUI theme
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Header onToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />

        {/* Routes */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default",
            color: "text.primary",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage products={products} />} // Pass products to HomePage
            />
            <Route
              path="/create-product"
              element={<CreateProductPage addProduct={addProduct} />} // Pass addProduct function to CreateProductPage
            />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
