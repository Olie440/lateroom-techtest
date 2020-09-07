import React from 'react';

import useHotels from '../hooks/use-hotels';
import Loading from '../../../components/loading.component';
import Error from '../../../components/error.component';
import HotelListItem from './hotel-list-item';

export default function HotelList() {
  const { loadingState, hotels } = useHotels();

  if (loadingState === 'Loading') {
    return <Loading message='Loading Hotel Data.' />;
  }

  if (loadingState === 'Error') {
    return <Error message='Error loading Hotel Data, please refresh to try again.' />;
  }

  if (hotels.length === 0) {
    return <div>No Hotels</div>;
  }

  return hotels.map((hotel) => (
    <HotelListItem {...hotel} key={hotel.id} />
  ));
}