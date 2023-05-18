import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
  const {user,loading} = useContext(UserContext)
  if(loading){
    return <div className="w-full h-[100vh] bg-[#212428] flex justify-center items-center"></div>
  }
  if(user){
    return children
  }
  return (
    <Navigate  to={"/login"} state={{ from: location }}>
      
    </Navigate>
  );
};

export default PrivetRoute;