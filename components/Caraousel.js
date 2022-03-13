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
    socialMedia: true,
    icons: false,
    paragraph:
      'Mi nombre es Heli Rosales, tengo 18 años, soy programador junior, empece con la programación hace 5 años y desde entonces la he practicado dia a dia, puliendo mis habilidades en el area a medida que hacia proyectos para aprender y afinar mis capacidades',
  },
  {
    label: 'EXPERIENCIA',
    socialMedia: false,
    icons: false,
    paragraph:
    'Tengo experiencia haciendo proyectos en React, utilizando Git y GitHub, Conocimientos basicos de Youtrack y haciendo proyectos en Unity3D, todo gracias a la dedicacion que le pongo a la programacion',
  },
  {
    label: 'FORMACIÓN',
    title: "Liceo Jose de San Martin",
    socialMedia: false,
    icons: false,
    paragraph:
      'Soy graduado de bachillerato cientifico del año 2021',
  },
  {
    label: 'AFICIONES / INTERESES',
    icons: true,
    socialMedia: false,
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
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={10}
                    >
                      <Typography variant="h4" component="h3" sx={{fontSize: "2.5vw"}}>{step.label}</Typography>
                      {step.socialMedia ? (
                        <>
                        <a href="https://www.facebook.com/HeliRosalesVillanueva" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Facebook"
                          src="/facebook.png"
                          sx={{ width: "3vw", height: "100%"}}
                          />
                        </a>
                        <a href="https://www.instagram.com/heliarv_/?hl=es-la" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Instagram"
                          src="/instagram.png"
                          sx={{ width: "3vw", height: "100%"}}
                          />
                        </a>
                        <a href="https://twitter.com/theo_1104" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Twitter"
                          src="/twitter.png"
                          sx={{ width: "3vw", height: "100%"}}
                          />
                        </a>
                      </>
                      ) : 
                      <Button sx={{fontSize: "1.2vw"}} onClick={() => window.print()} variant="outlined">DESCARGAR MI CV COMPLETO</Button>
                      }
                    </Stack>
                    {step.title ? (<Typography variant="h5" component="h2" sx={{marginTop:2}}>{step.title}</Typography>) : null}
                    {step. icons ?
                    <Box>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={10}
                        sx={{marginTop:2}}
                      >
                          <Avatar
                            alt="joystick"
                            src="/joystick.png"
                            sx={{ width: "7vw", height: "100%", background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Code"
                            src="/code.png"
                            sx={{ width: "7vw", height: "100%",  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Cinema"
                            src="/cinema.png"
                            sx={{ width: "7vw", height: "100%",  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                          <Avatar
                            alt="Park"
                            src="/park.png"
                            sx={{ width: "7vw", height: "100%",  background:"#94A7B1" ,":hover":{background: "#6F7F88"}}}
                            />
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={8}
                        sx={{marginTop:2}}
                      >
                        <Typography variant="p" component="h2" sx={{marginLeft:4, fontSize: "1.8vw"}}>Juegos</Typography>
                        <Typography variant="p" component="h2" sx={{fontSize: "1.8vw"}}>Programar</Typography>
                        <Typography variant="p" component="h2" sx={{fontSize: "1.8vw"}}>Peliculas</Typography>
                        <Typography variant="p" component="h2" sx={{fontSize: "1.8vw"}}>Naturaleza</Typography>
                      </Stack>
                    </Box>
                    : null}
                    <Typography variant="body1" component="h3" sx={{marginTop:2, fontSize: "1.2vw"}}>{step.paragraph}</Typography>
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