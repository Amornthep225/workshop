import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Report from './pages/Reports'

const mdTheme = createTheme()

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/report' element={<Report />} />
          </Route>

          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
