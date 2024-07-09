import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import UseApi from '../APIs/UseApi';
import { API_URLS } from '../APIs/Apiurls';
import Messages from '../extras/Messages';
import { EMPTY_TABS } from '../Constants/Constants';

const AllEmails = () => {
    const [selectedEmails,setselectedEmails]=useState([]);
    const [refreshScreen,setRefreshScreen]=useState(false);
    const {type} = useParams();
    const {opendrawer}= useOutletContext();

    const getEmails = UseApi(API_URLS.getEmailFromType)
    const moveEmails = UseApi(API_URLS.moveEmailsToBin)
    const deleteEmails = UseApi(API_URLS.deleteEmail)


   
    useEffect(()=>{

        getEmails.call({},type);

    },[type.refreshScreen]);


    const selectAllEmails=(e)=>{
        if(e.target.checked){
          const emails=  getEmails?.response?.map(email=>email._id);
        setselectedEmails(emails);
        
        }else{
             setselectedEmails([]);
        }
    }

    const  deleteSelectedEmails=(e)=>{
        if(type ==='bin'){
        deleteEmails.call(selectedEmails);

        }else{

          moveEmails.call(selectedEmails);
        }
        setRefreshScreen(prevState=>!prevState)
  }
  
  

  return (
    <Box style={openDrawer ?{marginLeft:250,width:'calc(100%-250px)'}:{width:'100%'}}>
    <Box style={{padding:'20px 10px 0 10px',display:'flex',alignItems:'center'}}>

        <Checkbox size="small" onChange={(e)=>selectAllEmails(e)}/>
        <DeleteOutline onClick={(e)=>deleteSelectedEmails(e)}/>

    </Box>
    <List>
         {
           getEmails?.response?.map(email =>(
            <Email
               key={email._id}
               email={email}
               selectedEmails={selectedEmails}
              setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setselectedEmails}
            />
           ))
          }

    </List>
    

    {
      getEmails?.response?.length===0 &&
   <Messages message={EMPTY_TABS[type]}/>
   
   }
   
        </Box>
  )
}

export default AllEmails