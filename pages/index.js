import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Header.module.css"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Caraousel from '../components/Caraousel';
import Aptitude from "../components/Aptitude"
import Forms from '../components/Forms';
import Footer from '../components/Footer';

export default function Home() {

  const handleTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
        <Button sx={{right:"88%", fontSize:"1.2vw"}} variant="text" size="large" onClick={handleTop}>INICIO</Button>
        <a href="https://www.dropbox.com/s/soo9ipt9bye09gj/CV.pdf?dl=0" target="_blank" rel="noreferrer noopener"><Button sx={{left:"80%",  width: "20%"}} variant="outlined" size="large">DESCARGAR MI CV COMPLETO</Button></a>
        <Image src={"/Code.jpg"} width="1500%" height="800%"/>
        <Avatar
        className={styles.Avatar}
        alt="Heli Rosales"
        src="/Avatar.jpg"
        sx={{ width: "21%", height: "40%" }}
        style={{
          border: '10px solid lightgray'
       }}
        />
        <h1>Heli Rosales</h1>
        <h2>Frontend Developer</h2>
      </Box>
      <Caraousel/>
      <Aptitude/>
      <Forms/>
      <Footer/>
    </div>
  )
}
