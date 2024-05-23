import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

 
  
  return (
    <Fragment>
      <div>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo />
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser} >
                Sign out
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
