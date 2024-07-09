import Home from "../components/Home";
import AllEmails from "../components/AllEmails";
import ViewEmail from "../components/ViewEmail";

const routes={
    home:{
        path:'/',
        element:<Home/>
    },
    emails:{
        path:'/emails',
        element:<AllEmails/>
    },
    view:{
        path:'/view',
        element:<ViewEmail/>
    },
    invalid:{
        path:'/*',
        element:<AllEmails/>
    },
    
}

export {routes};

