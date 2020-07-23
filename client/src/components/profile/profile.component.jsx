import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';
import ProfileForm from './profileForm.component';

import { getProfile } from '../../redux/profile/profile.action';

const Profile = ({ getProfile }) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <ProductContainer>
      <SideNavbar />
      <ProfileForm />
    </ProductContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
});

export default connect(null, mapDispatchToProps)(Profile);
