import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useEffect, useState } from "react";
import Booking from '../Booking/Booking';

// const bookings = [
//     {
//         id: 1,
//         name: 'Teeth Orthodonics',
//         time: '08.00 AM - 09.00 AM',
//         space: 10,
//     },
//     {
//         id: 2,
//         name: 'Cosmetic Dentistry',
//         time: '09.00 AM - 10.00 AM',
//         space: 8,
//     },
//     {
//         id: 3,
//         name: 'Teeth Cleaning',
//         time: '10.00 AM - 11.00 AM',
//         space: 9,
//     },
//     {
//         id: 4,
//         name: 'Cavity Protection',
//         time: '11.00 AM - 12.00 PM',
//         space: 5,
//     },
//     {
//         id: 5,
//         name: 'Pediatric Dental',
//         time: '06.00 PM - 07.00 PM',
//         space: 10,
//     },
//     {
//         id: 6,
//         name: 'Oral Surgery',
//         time: '07.00 PM - 08.00 PM',
//         space: 10,
//     },
// ]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://hidden-hamlet-67442.herokuapp.com/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
        <Container>
            <br /><br /><br />
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Laptops on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    services.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)


                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;