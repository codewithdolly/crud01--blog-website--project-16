import React from 'react'
import "./ViewPost.scss"
import { Typography } from '@mui/material'
import logo from "../images/logo.png"

const ViewPost = () => {
  return (
    <>
      <div className='viewPost'>
      <img src={logo} alt="logo" style={{marginTop:"100px"}} />
      <Typography variant="h5" component="div"></Typography>
      </div>
    </>
  )
}

export default ViewPost