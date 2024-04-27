import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { format } from 'date-fns';


const SingleProductView = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          `https://ecomapiqa.conferkare.com/api/productdet/cust/getall`
        );
        if (res.data && res.data.result && res.data.result.productdet) {
          const product = res.data.result.productdet.find(
            (product) => product._id === id
          );
          if (product) {
            setProductDetails(product);
          } else {
            setError("Product not found");
          }
        } else {
          setError("No data found in the response");
        }
      } catch (error) {
        setError("Error fetching product details: " + error.message);
      }
    };

    fetchProductDetails();
  }, [id]);

  const formatDateIndianTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy", { timeZone: "Asia/Kolkata" });
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Product Details
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {productDetails && (
          <Paper elevation={3} style={{ padding: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={productDetails.product_id.productImage[0]}
                  alt="Product"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" gutterBottom>
                  {productDetails.product_id.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Description: </strong>
                  {productDetails.description}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>MRP: </strong>
                  <del>
                  {productDetails.mrp
                    ? ` ₹${productDetails.mrp.$numberDecimal}`
                    : "MRP Unavailable"}
                  </del>
                
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Price:</strong>{" "}
                  {productDetails.price
                    ? ` ₹${productDetails.price.$numberDecimal}`
                    : "Price Unavailable"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Discount:</strong>{" "}
                  {productDetails.discount
                    ? `${productDetails.discount.$numberDecimal}%`
                    : "Discount Unavailable"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Manufacture Dt:</strong>{" "}
                  {formatDateIndianTime(productDetails.manufacture_dt)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Expiry Dt:</strong>{" "}
                  {formatDateIndianTime(productDetails.expiry_dt)}
                </Typography>
                <Button variant="contained">
                  ADD TO CART
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default SingleProductView;
