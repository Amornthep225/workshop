import { Box, Toolbar, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'

const drawerWidth: number = 240

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px')
  const [open, setOpen] = useState(isNonMobile ? true : false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const SignOut = () => {
    console.log('Sign Out')
  }

  return (
    <Box className='flex'>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        toggleDrawer={toggleDrawer}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        open={open}
        toggleDrawer={toggleDrawer}
        SignOut={SignOut}
      />
      <div className='flex flex-col'>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
        <Footer />
      </div>
    </Box>
  )
}

export default Layout
