import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../../api";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await fetchProducts();
      if (data && data.data) {
        setProducts(data.data);
      } else {
        console.error("Invalid API response:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Product Store
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="stretch"
        gap={2}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product._id}
              sx={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default HomePage;
