import { useMutation, useQuery } from '@apollo/react-hooks';
import axios from 'axios';
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
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [profilePhoto, setProfilePhoto] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
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

  const handlePhoto: ChangeEventHandler<HTMLInputElement> = async e => {
    const { files } = e.target;

    if (files) {
      try {
        setUploading(true);
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append(
          'api_key',
          process.env.REACT_APP_CLOUDINARY_API_KEY || '',
        );
        formData.append(
          'upload_preset',
          process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '',
        );
        formData.append('timestamp', String(Date.now() / 1000));

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env
            .REACT_APP_CLOUDINARY_CLOUD_NAME || ''}/upload`,
          formData,
        );
        console.log(response);
        if (response.data) {
          const { secure_url } = response.data;
          setProfilePhoto(secure_url);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await updateProfileMutation({
        refetchQueries: [
          {
            query: USER_PROFILE,
          },
        ],
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
      onPhotoChange={handlePhoto}
      uploading={uploading}
    />
  );
};

export default EditAccountContainer;
