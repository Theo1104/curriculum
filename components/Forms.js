import React from 'react'
import styles from "../styles/Form.module.css"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field } from "formik"

const Forms = () => {
  return (
    <div className={styles.container}>
        <Box sx={{background:"#0e5f2f", width:"50%", height:"100vh"}}>
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
            <Typography  variant="h3" sx={{marginLeft:"5%", marginTop:"10%"}}>CONTACTO</Typography>
            <Formik>
                <Form>
                    <Box sx={{marginTop:"5%", marginLeft:"5%"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <label htmlFor='name'>Nombre *</label>
                                <Field 
                                    type="text"
                                    id="nombre"
                                    className={styles.Fields}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <label htmlFor='lastname'>Apellido *</label>
                                <Field 
                                    type="text"
                                    id="lastname"
                                    className={styles.Fields}
                                    />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                        <label htmlFor='email'>E-mail *</label>
                            <Field 
                                type="email"
                                id="email"
                                className={styles.Fields}
                            />
                    </Box>
                    <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                        <label htmlFor='phone'>Telefono</label>
                            <Field
                                type="tel"
                                id="phone"
                                className={styles.Fields}
                            />
                    </Box>
                    <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                        <label htmlFor='business'>Asunto *</label>
                            <Field 
                                type="text"
                                id="business"
                                className={styles.Fields}
                            />
                    </Box>
                    <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                        <label htmlFor='message'>Mensaje *</label>
                            <Field
                                type="text"
                                as="textarea"
                                id="message"
                                className={styles.Fields}
                            />
                    </Box>
                </Form>
            </Formik>
        </Box>
    </div>
  )
}

export default Forms