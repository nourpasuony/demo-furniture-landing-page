import React from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';


import livingRoomImg from "../assets/lui-peng-8NxTrV6i4WQ-unsplash 1.png";

const features = [
  {
    title: 'Valuation Services',
    description: 'Sometimes features require a short description. This can be detailed description',
  },
  {
    title: 'Development of Furniture Models',
    description: 'Sometimes features require a short description. This can be detailed description',
  },
];

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  objectFit: 'cover',
});

export default function HomeSection() {
  return (
    <Box sx={{ p:'7rem', backgroundColor: '#fff' }}>
      <Grid container spacing={9} alignItems="center">
        {/* Left Image */}
        <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
          <StyledImage src={livingRoomImg} alt="Living room furniture" />
        </Grid>

        {/* Right Content */}
        <Grid item size={{ xs: 12, md: 6, lg: 6 }} sx={{ color: '#000' }}>
          <Typography variant="h5" fontWeight="bold" >
            We Create Your Home <br /> More Aesthetic
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Furniture power is a software as services for multipurpose business management system,
          </Typography>

          <List>
            {features.map((item, index) => (
              <ListItem key={index} disableGutters sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography fontWeight="bold">{item.title}</Typography>}
                  secondary={item.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
