import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    //const { name, time, space } = booking;
    //{ booking, date, setBookingSuccess }
    const { _id, name, description, price, image } = props.booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
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

export default Booking;