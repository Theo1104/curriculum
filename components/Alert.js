import React from 'react'
import styles from "../styles/Form.module.css"
import Box from "@mui/material/Box"

const Alert = ({children}) => {
  return (
    <Box className={styles.error}>
        {children}
    </Box>
  )
}

export default Alert