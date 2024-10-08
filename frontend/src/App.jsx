import React from 'react'
import { Box} from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
     <Box minH={"100vh"}>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/create' element={<Createpage/>}/>

       </Routes>

     </Box>
    </>
  )
}

export default App 
 