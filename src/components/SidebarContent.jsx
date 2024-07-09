
import {Photo, SendOutlined, StarOutline,InsertDriveFileOutlined,
    DeleteOutlined,MailOutlined,
    
} from '@mui/icons-material';
import { Container } from '@mui/material';

 const SIDEBAR_DATA=[
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo

    },

    {
        name:'starred',
        title:'Starred',
        icon:StarOutline

    },

    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined

    },
    {
        name:'drafts',
        title:'Drafts',
        icon:InsertDriveFileOutlined

    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutlined

    },
    {
        name:'allmail',
        title:'All Mail',
        icon:MailOutlined

    },

];

import React from 'react'
import Emailcreation from './Emailcreation';
import { NavLink, useParams } from 'react-router-dom';
import {Box,Button,styled,List,ListItem} from '@mui/material';
import {CreateOutlined} from '@mui/icons-material';
const ComposeButton=styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:15,
    borderRadius:16,
    minWidth:114,
    textTransform:'none'
});

const Container=styled(Box)({
    padding:8,
    '&>ul':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer',
        '&>a':{
           textDecoration:'none',
           color:'inherit'
        }
        
    },
    '&>ul>a>li>svg':{
        marginRight:20
    }
})

const SidebarContent = () => {
    const [openDialog,setOpenDialog]=useState(false);

    const {type}=useParams();
  const onComposeClick=() => {
    setOpenDialog(true);
  }



  return (
    <Container>
            
    <ComposeButton onClick={()=> onComposeClick()}>
                <CreateOutlined/>Compose</ComposeButton>
        
       <List>
        {
            SIDEBAR_DATA.map(data=>(
                <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                <ListItem style={type === data.name.toLowerCase()?{
                    backgroundColor:'#d3e3fd',
                    borderRadius:'0 16px 16px 0'
                }:{}}>
                  <data.icon fontSize='small'/>  {data.title}
                </ListItem>
                </NavLink>
            ))
        }
       </List>
       <Emailcreation openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  )
}

export default SidebarContent