import React, { useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";
import useAuth from './../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://hidden-hamlet-67442.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [user?.email]);
    return (
        <div>
            <Navigation></Navigation>
            <br /><br /><br />
            <h1>MyBookings</h1>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;