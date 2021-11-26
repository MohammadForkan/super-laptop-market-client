import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import InfoCard from '../InfoCard/InfoCard';
import Blogs from '../Blogs/Blogs';
import OurDoctors from '../OurDoctors/OurDoctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import AddProducts from '../AddProducts/AddProducts';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <InfoCard></InfoCard>
            <AppointmentBanner></AppointmentBanner>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;