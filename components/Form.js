import React from 'react'
import styles from "../styles/Form.module.css"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

const Form = () => {
  return (
    <div className={styles.container}>
        <Box sx={{background:"#269037", width:"50%", height:"100vh"}}>
            <Typography  variant="h3" sx={{marginLeft:"20%", marginTop:"10%"}}>INFO</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%"}}>Telefono: 9 3724 4950</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%"}}>E-mail: Helirosalesvillanueva@gmail.com</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%"}}>Sitio web: {""}
                <a href="https://www.linkedin.com/in/heli-rosales-35014222b/" target="_blank" rel="noreferrer noopener">
                    https://www.linkedin.com/in/heli-rosales-35014222b/
                </a>
            </Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", marginRight:"5%"}}>Dirección: Blanco Encalada 1723 Santiago Centro</Typography>
        </Box>
        <Box sx={{background:"#7bd03a", width:"50%", height:"100vh"}}>
            <Typography>Hola2</Typography>
        </Box>
    </div>
  )
}

export default Form