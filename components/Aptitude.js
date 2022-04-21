import Image from "next/image";
import { Box, Typography, Stack, Grid } from "@mui/material";
import styles from "../styles/Aptitude.module.css";

const Aptitude = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginLeft: 10,
            marginTop: 5,
            position: "absolute",
            zIndex: 2,
            color: "white",
            fontSize: "2.5vw",
          }}
        >
          Aptitudes
        </Typography>
        <Image src="/Code2.jpg" width="100%" height={60} layout="responsive" />
      </Box>
      <Grid container spacing={2} sx={{ marginLeft: "0%", marginTop: "0%" }}>
        <Stack alignItems="stretch">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box1}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "33%",
                  marginTop: "23%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.2vw",
                }}
              >
                HTML5
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  marginLeft: "20%",
                  marginTop: "35%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "1.3vw",
                }}
              >
                Intermedio
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box2}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  marginLeft: "38%",
                  marginTop: "25%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2vw",
                }}
              >
                CSS3
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  marginLeft: "22%",
                  marginTop: "35%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "2.5vw",
                }}
              >
                Intermedio
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box3}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "36.3%",
                  marginTop: "30%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.2vw",
                }}
              >
                Idiomas
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "35%",
                  marginTop: "38%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "1.3vw",
                }}
              >
                Español
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box4}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "25%",
                  marginTop: "20%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.2vw",
                }}
              >
                JavaScript
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "25%",
                  marginTop: "30%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "1.3vw",
                }}
              >
                Intermedio
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box5}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "47%",
                  marginTop: "30%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.5vw",
                }}
              >
                React
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  marginLeft: "43%",
                  marginTop: "43%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "1.8vw",
                }}
              >
                Basico
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box6}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  marginLeft: "43%",
                  marginTop: "34%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2.5vw",
                }}
              >
                Next
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  marginLeft: "37%",
                  marginTop: "42%",
                  position: "absolute",
                  zIndex: 2,
                  color: "red",
                  fontSize: "3vw",
                }}
              >
                Basico
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Aptitude;
