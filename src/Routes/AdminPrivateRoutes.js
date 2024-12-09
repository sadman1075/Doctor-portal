import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import{Navigate,useLocation} from 'react-router-dom';
import UseAdminHokes from '../Pages/Hokes/UseAdminHokes';

const AdminPrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=UseAdminHokes(user?.email)
    const location=useLocation();
    
    if(loading || isAdminLoading)
    {
        return <progress className='progress w-56'></progress>
    }

    if(user&&isAdmin)
    {
        return children;
    }
    return <div>
     
     <Navigate to='/login' state={{from:location}} replace></Navigate>
     </div>
  
    

};

export default AdminPrivateRoutes;