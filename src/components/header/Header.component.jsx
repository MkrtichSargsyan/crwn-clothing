import React from 'react';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className={'logo-container'} to={'/'}>
        <Logo className={'logo'} />
      </Link>
      <div className={'options'}>
        <Link className={'option'} to={'/shop'}>
          SHOP
        </Link>
        <Link className={'option'} to={'/contact'}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={'option'} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={'option'} to={'/signin'}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
