import { useMutation } from '@apollo/react-hooks';
import _ from 'lodash';
import React from 'react';
import { MY_PLACES } from '../../sharedQueries';
import { editPlace, editPlaceVariables, myPlaces } from '../../types/api';
import PlacesPresenter from './PlacePresenter';
import { EDIT_PLACE } from './PlaceQueries';

interface IProps {
  placeId: number;
  fav: boolean;
  name: string;
  address: string;
}

const PlaceContainer: React.FC<IProps> = ({ placeId, fav, name, address }) => {
  const [editPlaceMutation] = useMutation<editPlace, editPlaceVariables>(
    EDIT_PLACE,
  );

  const handleFav = async () => {
    try {
      await editPlaceMutation({
        update: (cache, result) => {
          if (result.data) {
            const { EditPlace } = result.data;

            if (EditPlace.ok) {
              const myPlacesQuery: myPlaces | null = _.cloneDeep(cache.readQuery({
                query: MY_PLACES,
              }));

              if (myPlacesQuery) {
                const { GetMyPlaces: { places } } = myPlacesQuery;

                if (places) {
                  const index = places.findIndex(p => p!.id === placeId);
                  places[index]!.isFav = !fav;
                  console.log(myPlacesQuery);
                  cache.writeQuery({
                    data: myPlacesQuery,
                    query: MY_PLACES,
                  });
                }
              }
            }
          }
        },
        variables: {
          isFav: !fav,
          placeId,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <PlacesPresenter
        name={name}
        address={address}
        fav={fav}
        onClickFav={handleFav}
      />
    </div>
  );
};

export default PlaceContainer;
