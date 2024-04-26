import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ApiIntegration = () => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://ecomapiqa.conferkare.com/api/productdet/cust/getall"
      );
      setMyData(res.data.result.productdet);
      console.log(res.data.result);
    } catch (error) {
      setError("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    <h1 className="text-center" variant='h6'>PRODUCT LIST</h1>
      {error && <p>{error}</p>}
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          {myData.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {item.product_id && item.product_id.productImage && (
                  <img
                    src={item.product_id.productImage[0]} 
                    alt="Product"
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      
                      objectFit: "cover",
                      height: "250px",
                    }}
                  />
                )}
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div>
                    <Typography variant="h5" gutterBottom>
                      {item.product_id
                        ? item.product_id.name
                        : "Product Name Unavailable"}{" "}
          
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      Price:{" "}
                      {item.price
                        ? `$${item.price.$numberDecimal}`
                        : "Price Unavailable"}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Discount: {item.discount ? `${item.discount.$numberDecimal}%` : "Discount Unavailable"}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      MRP: {item.mrp ? `$${item.mrp.$numberDecimal}` : "MRP Unavailable"}
                    </Typography>
                  </div>
                  <Button size="big" style={{ alignSelf: "center;",marginTop: "10px"  }}  variant="contained" fullWidth>
                    View
                  </Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ApiIntegration;
