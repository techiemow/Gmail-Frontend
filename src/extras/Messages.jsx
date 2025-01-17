
import {Box,Typography,styled,Divider} from '@mui/material';

const Component=styled(Box)({
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      marginTop:'50px',
      opacity:'0.8',
      width:'100%'
})

const StyledDivider=styled(Divider)({
    width:'100%',
    marginTop:10
})

const Messages = (message) => {
  return (
<Component>
    <Typography>{message.heading}</Typography>
    <Typography>{message.subHeading}</Typography>
    <StyledDivider/>
</Component>
  )
}

export default Messages





