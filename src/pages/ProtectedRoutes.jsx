import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoutes = () => {
    const trainerName = useSelector(store => store.trainerName);
    
    return (trainerName.length > 2)
        ? <Outlet />
        : <Navigate to='/' />;
};
