import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Paper, Button, Box, Grid } from '@mui/material';
import VtuLogo from '../../assets/Images/SectionFour/VtuLogo.png'
import "./Carousel.css"
const carouselItems = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 4' },
];

const Carousel = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < carouselItems.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    // Function to render grid items with specific empty cells
    const renderGrid = () => {
        return Array.from({ length: 5 }).map((_, rowIndex) => (
            <React.Fragment key={rowIndex}>
                {Array.from({ length: 5 }).map((_, colIndex) => {
                    // Skip cells in the 3rd row and 2nd, 3rd, 4th columns
                    if (rowIndex === 2 && (colIndex === 1 || colIndex === 2 || colIndex === 3)) {
                        return (
                            <Grid item xs={2.4} key={`${rowIndex}-${colIndex}`}>
                                <Paper elevation={1} sx={{ height: '80px', visibility: 'hidden' }} />
                            </Grid>
                        );
                    }
                    return (
                        <Grid item xs={2.4} key={`${rowIndex}-${colIndex}`}>
                            <Paper
                                elevation={1}
                                sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid black' }}
                            >
                                {<img className={"carousel-item"} src={VtuLogo} alt={"item"}/>}
                                {/*{`Cell ${rowIndex + 1},${colIndex + 1}`}*/}
                            </Paper>
                        </Grid>
                    );
                })}
            </React.Fragment>
        ));
    };

    return (
        <Box sx={{ border: 'solid', width: '100%', height: '100%', maxWidth: 1000, maxHeight: 600, margin: '0 auto', textAlign: 'center' }}>
            <SwipeableViews index={activeStep} onChangeIndex={setActiveStep} enableMouseEvents>
                {carouselItems.map((item, index) => (
                    <div key={index}>
                        <Paper elevation={3} style={{ marginRight: '2rem', marginLeft: '2rem', padding: '20px', height: '20rem', backgroundColor: 'transparent' }}>
                            <Grid container spacing={2}>
                                {renderGrid()}
                            </Grid>
                        </Paper>
                    </div>
                ))}
            </SwipeableViews>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                    disableRipple
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{
                        visibility: activeStep === 0 ? 'hidden' : 'visible',
                        color: 'black',
                        fontFamily: 'PF Reminder Pro Regular',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    &lt;Previous
                </Button>
                <Button
                    disableRipple
                    onClick={handleNext}
                    disabled={activeStep === carouselItems.length - 1}
                    sx={{
                        visibility: activeStep === carouselItems.length - 1 ? 'hidden' : 'visible',
                        color: 'black',
                        fontFamily: 'PF Reminder Pro Regular',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    Next&gt;
                </Button>
            </Box>
        </Box>
    );
};

export default Carousel;
