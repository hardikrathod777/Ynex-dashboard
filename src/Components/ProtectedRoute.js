import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector(state => state.authReducer.isLogin);

  if (!isLogin) {
    return <Navigate to="/signin" />
  }

  return children;
};

export default ProtectedRoute;
