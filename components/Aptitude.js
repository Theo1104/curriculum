import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

const Aptitude = () => {
  return (
    <div>
        <Box>
            <Typography variant="h4" component="h1" sx={{marginLeft:10, marginTop:5,position:"absolute", zIndex:2, color:"white"}}>Aptitudes</Typography>
            <Image src="/Code2.jpg" width="100%" height={60} layout="responsive"/>
        </Box>
    </div>
  )
}

export default Aptitude