import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEventHandler, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MY_PLACES } from '../../sharedQueries';
import { addPlace, addPlaceVariables } from '../../types/api';
import AddPlacePresenter from './AddPlacePresenter';
import { ADD_PLACE } from './AddPlaceQueries';

const AddPlaceContainer: React.FC<RouteComponentProps> = ({ location, history }) => {
  const { state = {} } = location;
  const [address, setAddress] = useState<string>(state.address || '');
  const [name, setName] = useState<string>('');
  const [lat] = useState<number>(state.lat || 0);
  const [lng] = useState<number>(state.lng || 0);
  const [addPlaceMutation, { loading }] = useMutation<
    addPlace,
    addPlaceVariables
  >(ADD_PLACE);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name: targetName, value } = e.target;

    if (targetName === 'address') {
      setAddress(value);
    }

    if (targetName === 'name') {
      setName(value);
    }
  };

  const submitAddPlace = async () => {
    try {
      const { data } = await addPlaceMutation({
        refetchQueries: [{ query: MY_PLACES }],
        variables: {
          address,
          isFav: false,
          lat,
          lng,
          name,
        },
      });

      if (data) {
        const { AddPlace } = data;
        if (AddPlace.ok) {
          toast.success('Place added!');
          history.push('/places');
        }
        if (AddPlace.error) {
          toast.error(AddPlace.error);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AddPlacePresenter
      onInputChange={handleInputChange}
      address={address}
      name={name}
      loading={loading}
      onSubmit={submitAddPlace}
      pickedAddress={lat !== 0 && lng !== 0 && name !== ''}
    />
  );
};

export default AddPlaceContainer;
