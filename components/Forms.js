import React from 'react'
import styles from "../styles/Form.module.css"
import { Formik, Form, Field} from "formik"
import * as Yup from "yup"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from "./Alert"

const Forms = () => {

    const schema = Yup.object().shape({
        name: Yup.string()
                            .min(3, "El nombre es muy corto")
                            .max(10, "El nombre es muy largo")
                            .required("El nombre es obligatorio"),
        lastname: Yup.string()
                            .min(3, "El apellido es muy corto")
                            .max(10, "El apellido es muy largo")
                            .required("El apellido es obligatorio"),
        email:Yup.string()
                            .email("El E-mail no es valido")
                            .required("El nombre es obligatorio"),
        phone: Yup.number()
                            .positive("Número no valido")
                            .integer("Número no valido")
                            .typeError("Número no valido"),
        business: Yup.string()
                                .required("El asunto es obligatorio")
    })

    const handleSubmit = (values) =>{

    }

  return (
    <div className={styles.container}>
        <Box sx={{background:"#0e5f2f", width:"50%", height:"117vh"}}>
            <Typography  variant="h3" sx={{marginLeft:"20%", marginTop:"10%", fontSize:"4vw"}}>INFO</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", fontSize:"1.7vw"}}>Telefono: 9 3724 4950</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", fontSize:"1.7vw"}}>E-mail: Helirosalesvillanueva@gmail.com</Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", fontSize:"1.7vw"}}>Linkedin: {""}
                <a href="https://www.linkedin.com/in/heli-rosales-35014222b/" target="_blank" rel="noreferrer noopener">
                    https://www.linkedin.com/in/heli-rosales-35014222b/
                </a>
            </Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", fontSize:"1.7vw"}}>GitHub: {""}
                <a href="https://github.com/Theo1104?tab=repositories" target="_blank" rel="noreferrer noopener">
                    https://github.com/Theo1104?tab=repositories
                </a>
            </Typography>
            <Typography  variant="h5" sx={{marginLeft:"20%", marginTop:"10%", marginRight:"5%", fontSize:"1.7vw"}}>Dirección: Blanco Encalada 1723 Santiago Centro</Typography>
        </Box>

        <Box sx={{background:"#7bd03a", width:"50%", height:"117vh"}}>
            <Typography  variant="h3" sx={{marginLeft:"5%", marginTop:"10%", fontSize:"4vw"}}>CONTACTO</Typography>
            <Formik
                initialValues={{
                    name: "",
                    lastname:"",
                    email:"",
                    phone:"",
                    business:"",
                    message:""
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                validationSchema={schema}
            >
                {({errors, touched}) => {
                    return(
                    <Form>
                        <Box sx={{marginTop:"5%", marginLeft:"5%"}}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <label htmlFor='name'>Nombre *</label>
                                    <Field 
                                        type="text"
                                        id="name"
                                        className={styles.Fields}
                                        name="name"
                                    />
                                    {errors.name && touched.name ? (
                                        <Alert>{errors.name}</Alert>
                                    ) : null}
                                </Grid>
                                <Grid item xs={6}>
                                    <label htmlFor='lastname'>Apellido *</label>
                                    <Field 
                                        type="text"
                                        id="lastname"
                                        className={styles.Fields}
                                        name="lastname"
                                        />
                                        {errors.lastname && touched.lastname ? (
                                        <Alert>{errors.lastname}</Alert>
                                    ) : null}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                            <label htmlFor='email'>E-mail *</label>
                                <Field 
                                    type="email"
                                    id="email"
                                    className={styles.Fields}
                                    name="email"
                                />
                                {errors.email && touched.email ? (
                                        <Alert>{errors.email}</Alert>
                                    ) : null}
                        </Box>
                        <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                            <label htmlFor='phone'>Telefono</label>
                                <Field
                                    type="tel"
                                    id="phone"
                                    className={styles.Fields}
                                    name="phone"
                                />
                                {errors.phone && touched.phone ? (
                                        <Alert>{errors.phone}</Alert>
                                    ) : null}
                        </Box>
                        <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                            <label htmlFor='business'>Asunto *</label>
                                <Field 
                                    type="text"
                                    id="business"
                                    className={styles.Fields}
                                    name="business"
                                />
                                {errors.business && touched.business ? (
                                        <Alert>{errors.business}</Alert>
                                    ) : null}
                        </Box>
                        <Box sx={{marginTop:"5%", marginLeft:"18%"}}>
                            <label htmlFor='message'>Mensaje</label>
                                <Field
                                    type="text"
                                    as="textarea"
                                    id="message"
                                    className={styles.Fields}
                                    name="message"
                                />
                        </Box>
                        <input 
                        type="submit"
                        className={styles.submit}
                        />
                    </Form>
                )}}
            </Formik>
        </Box>
    </div>
  )
}

export default Forms