import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/registration/authSelector';
import Loader from './Loader';

const PrivateRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn && restricted ? children : <Navigate to="/login" />}
    </Suspense>
  );
};

export default PrivateRoute;

PrivateRoute.prototype = {
  restricted: PropTypes.bool,
};
