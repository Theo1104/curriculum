import React from "react";
import styles from "../styles/Form.module.css";
import { useFormik } from "formik";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import * as Yup from "yup";

const Forms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      issues: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("El Nombre es Obligatorio")
        .min(3, "El nombre ingresado es muy corto.")
        .max(10, "El nombre ingresado es muy largo."),

      lastName: Yup.string()
        .required("El Apellido es Obligatorio")
        .min(3, "El Apellido ingresado es muy corto.")
        .max(10, "El Apellido ingresado es muy largo."),

      email: Yup.string()
        .required("Por favor introduzca su email para poder contactarlo")
        .email("El email no es valido"),

      issues: Yup.string()
        .required("El Asunto es Obligatorio")
        .min(10, "El asunto ingresado es muy corto.")
        .max(30, "El asunto ingresado es muy largo."),

      message: Yup.string()
        .required("Debe dejarnos un mensaje con lo que desea")
        .min(10, "El mensaje ingresado es muy corto.")
        .max(150, "El mensaje ingresado es muy largo."),
    }),
    onSubmit: (values, helpers) => {
      console.log(values);
      helpers.resetForm();
    },
  });
  return (
    <Box className={styles.container}>
      <Box sx={{ background: "#006b33", width: "50%", height: "110vh" }}>
        <Typography
          variant="h3"
          sx={{ marginLeft: "20%", marginTop: "10%", fontSize: "4vw" }}
        >
          INFO
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "20%", marginTop: "5%", fontSize: "1.7vw" }}
        >
          Telefono: <Link href="tel:937244950">9 3724 4950</Link>
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "20%", marginTop: "5%", fontSize: "1.7vw" }}
        >
          E-mail:{" "}
          <Link href="mailto:helirosalesvillanueva@gmail.com">
            Helirosalesvillanueva@gmail.com
          </Link>
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "20%", marginTop: "5%", fontSize: "1.7vw" }}
        >
          Linkedin: {""}
          <Link
            href="https://www.linkedin.com/in/heli-rosales-35014222b/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.linkedin.com/in/heli-rosales-35014222b/
          </Link>
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "20%", marginTop: "5%", fontSize: "1.7vw" }}
        >
          GitHub: {""}
          <Link
            href="https://github.com/Theo1104?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/Theo1104?tab=repositories
          </Link>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginLeft: "20%",
            marginTop: "5%",
            marginRight: "5%",
            fontSize: "1.7vw",
          }}
        >
          Dirección:{" "}
          <Link
            href="https://goo.gl/maps/EaejDguxpJfzCXDq6"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blanco Encalada 1723 Santiago Centro
          </Link>
        </Typography>
      </Box>

      <Box sx={{ background: "#008745", width: "50%", height: "110vh" }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Box>
              <Typography
                variant="h3"
                sx={{ marginLeft: "15%", marginTop: "26%", fontSize: "4vw" }}
              >
                CONTACTO
              </Typography>
            </Box>
            <Container>
              <Grid item columnSpacing={1}>
                <Grid sx={{ display: "flex", gap: 4 }}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                      error={Boolean(
                        formik.touched.firstName && formik.errors.firstName
                      )}
                      fullWidth
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      label="Nombre"
                      margin="normal"
                      name="firstName"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      value={formik.values.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                      error={Boolean(
                        formik.touched.lastName && formik.errors.lastName
                      )}
                      fullWidth
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                      label="Apellido"
                      margin="normal"
                      name="lastName"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      value={formik.values.lastName}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email"
                    margin="normal"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.issues && formik.errors.issues
                    )}
                    fullWidth
                    helperText={formik.touched.issues && formik.errors.issues}
                    label="Asunto"
                    margin="normal"
                    name="issues"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.issues}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    fullWidth
                    multiline
                    rows={3}
                    helperText={formik.touched.message && formik.errors.message}
                    label="Mensaje"
                    margin="normal"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.message}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Box>
            <Button className={styles.submit} type="submit">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Forms;
