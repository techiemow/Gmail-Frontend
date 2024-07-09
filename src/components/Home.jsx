import {useState,Suspense} from 'react';


import {Outlet} from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';
import {Box} from '@mui/material';
import Navbar from './Navbar';

const Home = () => {
    const[openDrawer,setOpenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=> !prevState);
    }
  return (
    <>
    <Navbar toggleDrawer={toggleDrawer}/>
    <Box>
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={openDrawer}/>
      </Suspense>
    </Box>
    </>
  )
}

export default Home