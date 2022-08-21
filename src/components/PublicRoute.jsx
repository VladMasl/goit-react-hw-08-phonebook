import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/registration/authSelector';
import Loader from './Loader';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn && restricted ? <Navigate to="/contacts" /> : children}
    </Suspense>
  );
};

export default PublicRoute;

PublicRoute.prototype = {
  restricted: PropTypes.bool,
};
