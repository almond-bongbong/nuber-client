import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { USER_PROFILE } from '../../sharedQueries';
import {
  updateProfile,
  updateProfileVariables,
  userProfile,
} from '../../types/api';
import EditAccountPresenter from './EditAccountPresenter';
import { UPDATE_PROFILE } from './EditAccountQueries';

const EditAccountContainer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const { data } = useQuery<userProfile>(USER_PROFILE);
  const [updateProfileMutation, { loading }] = useMutation<
    updateProfile,
    updateProfileVariables
  >(UPDATE_PROFILE);

  useEffect(() => {
    if (data) {
      const { GetMyProfile } = data;
      if (GetMyProfile.ok && GetMyProfile.user) {
        setFirstName(GetMyProfile.user.firstName);
        setLastName(GetMyProfile.user.lastName);
        setEmail(GetMyProfile.user.email || '');
        setProfilePhoto(GetMyProfile.user.profilePhoto || '');
      }
    }
  }, [data]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'profilePhoto') {
      setProfilePhoto(value);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await updateProfileMutation({
        refetchQueries: [{
          query: USER_PROFILE,
        }],
        variables: {
          email,
          firstName,
          lastName,
          profilePhoto,
        },
      });

      if (result.data) {
        const { UpdateMyProfile } = result.data;

        if (UpdateMyProfile.ok) {
          toast.success('Profile updated!');
        } else if (UpdateMyProfile.error) {
          toast.error(UpdateMyProfile.error);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <EditAccountPresenter
      email={email}
      firstName={firstName}
      lastName={lastName}
      profilePhoto={profilePhoto}
      onInputChange={handleInputChange}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default EditAccountContainer;
