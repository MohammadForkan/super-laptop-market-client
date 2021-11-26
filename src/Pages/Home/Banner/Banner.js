import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/home.jpg';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <br /><br />
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 15, fontWeight: 400, color: 'gray' }}>
                            Computer village nice sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Going To Laptops Village</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;