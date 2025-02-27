import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  
  // Se não houver token, redireciona para login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;