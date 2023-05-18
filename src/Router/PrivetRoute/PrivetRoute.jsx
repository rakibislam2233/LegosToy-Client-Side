import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
  const {user,loading} = useContext(UserContext)
  if(loading){
    return <div>loading........</div>
  }
  if(user){
    return children
  }
  return (
    <Navigate>
      
    </Navigate>
  );
};

export default PrivetRoute;