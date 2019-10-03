import { useMutation, useQuery } from '@apollo/react-hooks';
import React from 'react';
import { toast } from 'react-toastify';
import { USER_PROFILE } from '../../sharedQueries';
import { toggleDriving, userProfile } from '../../types/api';
import MenuPresenter from './MenuPresenter';
import { TOGGLE_DRIVING } from './MenuQueries';

const MenuContainer = () => {
  const { data, loading } = useQuery<userProfile>(USER_PROFILE);
  const [toggleDrivingFn] = useMutation<toggleDriving>(TOGGLE_DRIVING, {
    update: (cache, result) => {
      if (result.data) {
        const { ToggleDrivingMode } = result.data;

        if (ToggleDrivingMode.ok) {
          const query: userProfile | null = cache.readQuery({
            query: USER_PROFILE,
          });

          if (query) {
            const {
              GetMyProfile: { user },
            } = query;

            if (user) {
              user!.isDriving = !user!.isDriving;
            }
          }
          cache.writeQuery({ query: USER_PROFILE, data: query });
        } else {
          toast.error(ToggleDrivingMode.error);
        }
      }
    },
  });

  return (
    <MenuPresenter
      data={data}
      loading={loading}
      toggleDrivingFn={toggleDrivingFn}
    />
  );
};

export default MenuContainer;
