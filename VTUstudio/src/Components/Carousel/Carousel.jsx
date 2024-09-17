import React from 'react';
import Slider from "react-slick";
import { Paper, Typography, Button } from '@mui/material';

// Import styles for the slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
    {
        title: 'Slide 1',
        description: 'This is the first slide',
    },
    {
        title: 'Slide 2',
        description: 'This is the second slide',
    },
    {
        title: 'Slide 3',
        description: 'This is the third slide',
    },
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {carouselItems.map((item, index) => (
                <div key={index}>
                    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {item.description}
                        </Typography>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </Paper>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
