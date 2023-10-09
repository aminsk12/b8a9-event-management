
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    // we'hv to wait here 
    if (loading) return <h1 className="text-5xl flex justify-center text-center"><span className="loading loading-spinner loading-lg"></span></h1>


    if (user) {
        return children
    }


    if (!user?.email) {
        return <Navigate state={location.pathname} to='/login' />
    }



    return children;
};

export default PrivateRoute;