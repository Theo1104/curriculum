import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Header.module.css"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curriculum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Box className={styles.Box}>
        <Button sx={{right:"90%"}} variant="text" size="large">INICIO</Button>
        <Button sx={{left:"80%"}} variant="outlined" size="large">DESCARGAR MI CV COMPLETO</Button>
        <Image src={"/Code.jpg"} width="100%" height={50} layout="responsive"/>
        <Avatar
        className={styles.Avatar}
        alt="Heli Rosales"
        src="/Avatar.jpg"
        sx={{ width: 286, height: 286 }}
        style={{
          border: '10px solid white'
       }}
        />
        <h1>Heli Rosales</h1>
        <h2>Programador Junior</h2>
      </Box>
    </div>
  )
}
