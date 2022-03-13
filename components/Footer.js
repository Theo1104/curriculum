import React from 'react'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const Footer = () => {
  return (
    <footer>
        <Box sx={{marginTop:"4%"}}>
                <Grid container spacing={2}>
                        <Button sx={{marginLeft:"20%", width:"30%"}} variant="outlined" size="large">DESCARGAR MI CV COMPLETO</Button>
                        <a href="https://www.facebook.com/HeliRosalesVillanueva" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Facebook"
                          src="/facebook.png"
                          sx={{ width: 36, height: 36, marginLeft: "550%"}}
                          />
                        </a>
                        <a href="https://www.instagram.com/heliarv_/?hl=es-la" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Instagram"
                          src="/instagram.png"
                          sx={{ width: 36, height: 36, marginLeft: "600%"}}
                          />
                        </a>
                        <a href="https://twitter.com/theo_1104" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Twitter"
                          src="/twitter.png"
                          sx={{ width: 36, height: 36, marginLeft: "650%"}}
                          />
                        </a>
                </Grid>
                <Grid container spacing={2} sx={{marginTop:"1%"}}>
                    <Typography sx={{marginLeft:"28%"}} variant="body1" component="h3">© Creado por Heli Rosales</Typography>
                    <Typography variant="body1" component="h3" sx={{marginLeft:"21%"}}>Sigueme en redes sociales</Typography>
                </Grid>
        </Box>
    </footer>
  )
}

export default Footer