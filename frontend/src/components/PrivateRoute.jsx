import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({children}) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated === true ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
