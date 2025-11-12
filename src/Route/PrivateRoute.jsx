
import { use} from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;