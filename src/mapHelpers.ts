import axios from 'axios';
import { toast } from 'react-toastify';

export const geoCode = async (address: string) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;

  try {
    const response = await axios.get(URL);
    if (!response.data.error_message) {
      const { results } = response.data;

      if (results && results.length > 0) {
        const firstPlace = results[0];
        const {
          formatted_address,
          geometry: {
            location: { lat, lng },
          },
        } = firstPlace;

        return {
          formatted_address,
          lat,
          lng,
        };
      }
    } else {
      toast.error(response.data.error_message);
    }
  } catch (e) {
    console.error(e);
  }
};

export const reverseGeoCode = async (
  lat: number,
  lng: number,
): Promise<string | undefined> => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;

  try {
    const response = await axios.get(URL);

    if (!response.data.error_message) {
      const { results } = response.data;
      const firstPlace = results[0];
      return firstPlace.formatted_address;
    } else {
      toast.error(response.data.error_message);
    }
  } catch (e) {
    console.error(e);
  }
};
