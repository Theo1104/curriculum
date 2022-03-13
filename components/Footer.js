import React from 'react'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Footer = () => {
  return (
    <footer>
        <Box sx={{marginTop:"4%"}}>
                <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        sx={{marginTop:2}}>
                        <Button sx={{marginRight: "10%",width:"30%"}} onClick={() => window.print()} variant="outlined" size="large">DESCARGAR MI CV COMPLETO</Button>
                        <a href="https://www.facebook.com/HeliRosalesVillanueva" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Facebook"
                          src="/facebook.png"
                          sx={{ width: 36, height: 36}}
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/heli-rosales-35014222b/" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="Linkedin"
                          src="/linkedin.png"
                          sx={{ width: 36, height: 36}}
                          />
                        </a>
                        <a href="https://github.com/Theo1104?tab=repositories" target="_blank" rel="noreferrer noopener">
                          <Avatar
                          alt="GitHub"
                          src="/github.png"
                          sx={{ width: 36, height: 36}}
                          />
                        </a>
                </Stack>
                <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={17}
                        sx={{marginTop:2}}>
                    <Typography sx={{marginX:"9.5%"}} variant="body1" component="h3">© Creado por Heli Rosales</Typography>
                    <Typography variant="body1" component="h3">Sigueme en redes sociales</Typography>
                </Stack>
        </Box>
    </footer>
  )
}

export default Footer