import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Form } from '../form/form-style';
import { Button } from '../button';
import { FormControl } from '../../pages/auth/auth-style';
import { Card } from '../admin/style';
import { createProfile } from '../../redux/profile/profile.action';
import { selectUserProfile } from '../../redux/profile/profile.selectors';
import { alertScroll } from '../js/main';

const ProfileForm = ({ profile: { profile, loading }, createProfile }) => {
  const [formData, setFormData] = useState({
    date_of_birth: '',
    gender: '',
    bank: '',
    account_name: '',
    account_number: '',
    bvn: '',
    name: '',
    relationship: '',
    email: '',
    phone: '',
    nok_gender: '',
  });

  useEffect(() => {
    setFormData({
      date_of_birth:
        loading || !profile.date_of_birth ? '' : profile.date_of_birth,
      gender: loading || !profile.gender ? '' : profile.gender,
      bank: loading || !profile.bank ? '' : profile.bank,
      account_name:
        loading || !profile.account_name ? '' : profile.account_name,
      account_number:
        loading || !profile.account_number ? '' : profile.account_number,
      bvn: loading || !profile.bvn ? '' : profile.bvn,
      name: loading || !profile.next_of_kin ? '' : profile.next_of_kin.name,
      relationship:
        loading || !profile.next_of_kin ? '' : profile.next_of_kin.relationship,
      email: loading || !profile.next_of_kin ? '' : profile.next_of_kin.email,
      phone: loading || !profile.next_of_kin ? '' : profile.next_of_kin.phone,
      nok_gender:
        loading || !profile.next_of_kin ? '' : profile.next_of_kin.nok_gender,
    });
    // eslint-disable-next-line
  }, [loading]);

  const {
    date_of_birth,
    gender,
    bank,
    account_name,
    account_number,
    bvn,
    name,
    relationship,
    email,
    phone,
    nok_gender,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);

    alertScroll();
  };

  return (
    <Card className='mt-1'>
      <Form onSubmit={onSubmit}>
        <FormControl>
          <label>Date of birth</label>
          <input
            type='date'
            name='date_of_birth'
            value={date_of_birth || ''}
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Gender</label>
          <select name='gender' value={gender || ''} onChange={onChange}>
            <option>--Select--</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </FormControl>

        <FormControl>
          <label>Bank</label>
          <input
            type='text'
            name='bank'
            value={bank || ''}
            placeholder='Bank'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Account Name</label>
          <input
            type='text'
            name='account_name'
            value={account_name || ''}
            placeholder='Account Name'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Account Number</label>
          <input
            type='number'
            name='account_number'
            value={account_number || ''}
            placeholder='Account Number'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>BVN</label>
          <input
            type='number'
            name='bvn'
            value={bvn || ''}
            placeholder='BVN'
            onChange={onChange}
          />
        </FormControl>

        <h4 className='mt-1'>Next of Kin</h4>

        <FormControl>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={name || ''}
            placeholder='Name'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Relationship</label>
          <input
            type='text'
            name='relationship'
            value={relationship || ''}
            placeholder='Relationship'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email || ''}
            placeholder='Email Address'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Phone Number</label>
          <input
            type='number'
            name='phone'
            value={phone || ''}
            placeholder='Phone Number'
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <label>Gender</label>
          <select
            name='nok_gender'
            value={nok_gender || ''}
            onChange={onChange}
          >
            <option>--Select--</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </FormControl>

        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

ProfileForm.propTypes = {
  profile: PropTypes.object,
  createProfile: PropTypes.func,
  loadUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  profile: selectUserProfile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (formData) => dispatch(createProfile(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
