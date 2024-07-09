import {useState,Suspense} from 'react';


import {Outlet} from 'react-router-dom';

import {Box} from '@mui/material';
import Navbar from './Navbar';
import Loading from '../extras/Loading';

const Home = () => {
    const[openDrawer,setOpenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=> !prevState);
    }
  return (
    <>
    <Navbar toggleDrawer={toggleDrawer}/>
    <Box>
      <Suspense fallback={<Loading />}>
        <Outlet context={openDrawer}/>
      </Suspense>
    </Box>
    </>
  )
}

export default Home