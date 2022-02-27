import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { VideogameAsset, Code, Park, Computer } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'SOBRE MÍ',
    paragraph:
      'Mi nombre es Heli Rosales, tengo 18 años y soy programador junior, empece con la programación hace 5 años y desde entonces la he practicado dia a dia, puliendo mis habilidades en el area, domino en gran medida JavaScript, uso React-Native y Next JS de manera intermedia',
  },
  {
    label: 'EXPERIENCIA',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'FORMACIÓN',
    title: "Liceo Jose de San Martin",
    paragraph:
      'Soy graduado de bachillerato cientifico del año 2021',
  },
  {
    label: 'AFICIONES / INTERESES',
    icons: true,
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Caraousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{maxWidth: "100%", flexGrow: 1, marginTop:"10%"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: "lightgray",
        }}
      >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Container>
                <Box sx={{bgcolor: "lightgray"}}>
                    <h1>{step.label}</h1>
                    {step.title ? (<Typography variant="h5" component="h2">{step.title}</Typography>) : null}
                    {step. icons ?
                    <Box>
                      <Grid item xs={8}>
                        <VideogameAsset fontSize='large' sx={{marginRight:10}}/>
                        <Code fontSize='large'  sx={{marginX:10}}/> 
                        <Computer fontSize='large'  sx={{marginX:10}}/> 
                        <Park fontSize='large'  sx={{marginLeft:10}}/> 
                        <Box sx={{float:"left", marginRight:10}}>
                        <p>Videojuegos</p>
                        </Box>
                        <Box sx={{float:"left", marginX:2}}>
                        <p>Programar</p>
                        </Box>
                        <Box sx={{float:"left", marginX:12}}>
                        <p>Tecnologia</p>
                        </Box>
                        <Box sx={{float:"left", marginLeft:3}}>
                        <p>Naturaleza</p>
                        </Box>
                      </Grid>
                    </Box>
                    : null}
                    <p>{step.paragraph}</p>
                  </Box>
                </Container>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{bgcolor: "lightgray"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Caraousel;