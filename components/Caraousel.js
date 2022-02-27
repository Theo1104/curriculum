import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Avatar from '@mui/material/Avatar';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Stack from '@mui/material/Stack';
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
    paragraph:
    'Tengo experiencia haciendo proyectos en React, utilizando Git y GitHub, Conocimientos basicos de Youtrack y haciendo proyectos en Unity3D, todo gracias a la dedicacion que le pongo a la programacion',
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
    <Box sx={{maxWidth: "100%", flexGrow: 1, marginTop:15}}>
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
                <Stack
                        alignItems="center"
                      >
                    <h1>{step.label}</h1>
                    {step.title ? (<Typography variant="h5" component="h2">{step.title}</Typography>) : null}
                    {step. icons ?
                    <Box>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={10}
                      >
                          <Avatar
                            alt="Heli Rosales"
                            src="/joystick.png"
                            sx={{ width: 86, height: 86, background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Heli Rosales"
                            src="/code.png"
                            sx={{ width: 86, height: 86,  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Heli Rosales"
                            src="/cinema.png"
                            sx={{ width: 86, height: 86,  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Heli Rosales"
                            src="/park.png"
                            sx={{ width: 86, height: 86,  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={8}
                        sx={{marginTop:2}}
                      >
                        <Typography variant="p" component="h2" sx={{marginLeft:4}}>Juegos</Typography>
                        <Typography variant="p" component="h2">Programar</Typography>
                        <Typography variant="p" component="h2">Peliculas</Typography>
                        <Typography variant="p" component="h2">Naturaleza</Typography>
                      </Stack>
                    </Box>
                    : null}
                    <p>{step.paragraph}</p>
                    </Stack>
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