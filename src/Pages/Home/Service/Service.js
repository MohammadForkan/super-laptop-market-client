import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



const Service = (props) => {
    const { _id, name, description, price, image } = props.service;
    return (

        // <Grid item xs={4} sm={4} md={4}>
        //     <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        //         <CardMedia
        //             component="img"
        //             style={{ width: 'auto', height: '80px', margin: '0 auto' }}
        //             image={image}
        //         //alt="green iguana"
        //         />
        //         <CardContent>
        //             <Typography variant="h5" component="div">
        //                 {name}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 {description}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 {price}
        //             </Typography>
        //             <Link to={`/services/${_id}`}><Button variant="contained">Order Now{name.toLowerCase()}</Button></Link>
        //         </CardContent>
        //     </Card>
        // </Grid >
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <CardMedia
                        component="img"
                        style={{ width: '300px', height: '200px', margin: '0 auto' }}
                        image={image}
                    //alt="green iguana"
                    />
                    <br />
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <br />
                    <Typography variant="h8" gutterBottom component="div">
                        {description}
                    </Typography>
                    <br />
                    <Typography variant="h6" display="block" gutterBottom>
                        AVAILABLE  PRICE : {price}
                    </Typography>
                    <br />
                    <Link to={`/services/${_id}`}> <Button variant="contained">BOOK NOW{name.toLowerCase()}</Button></Link>
                    {/* onClick={handleBookingOpen} */}
                </Paper>
            </Grid>
            {/* <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal> */}
        </>

    );
};

export default Service;