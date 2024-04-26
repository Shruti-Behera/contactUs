import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Data from '../Data';

export default function CardDataView() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
      <Grid container spacing={3}>
        {Data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img src={item.image} alt="Image" style={{ width: '100%', marginBottom: '20px', objectFit: 'cover', height: '250px' }} />
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
                <div>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {item.description}
                  </Typography>
                  <ul style={{ marginLeft: '-20px'}}>
                    {item.additionalData && item.additionalData.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
                <Button size="small" style={{ alignSelf: 'flex-end' }}>Learn More</Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
