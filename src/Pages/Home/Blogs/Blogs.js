import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import BlogSingle from './BlogSingle';
const blogsData = [
    {
        name: 'WG. Sinthia',
        date: '23 April 2019',
        img: person3,
        title: 'Check at least a laptop in a year for your hp laptop'
    },
    {
        name: 'WG. Monika',
        date: '23 April 2019',
        img: person2,
        title: 'Two time clean in a day can keep you computer'
    },
    {
        name: 'WG. John',
        date: '23 April 2019',
        img: person1,
        title: 'The laptop service is taking a challenge'
    }
]
const Blogs = () => {
    return (
        <section id="blog" >
            <Container sx={{ py: 10, mt: 5 }}>
                <Typography variant="h5" color="#19D3AE" textAlign="center" fontWeight={500}>OUR BLOG</Typography>
                <Typography variant="h4" sx={{ fontWeight: 500, textAlign: "center", mb: 2 }}>From Our Blog News</Typography>
                <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
                    {
                        blogsData.map((item, i) => <BlogSingle key={i} item={item} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Blogs;