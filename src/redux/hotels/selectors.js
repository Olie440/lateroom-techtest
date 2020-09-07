import size from 'lodash/size';

export const getLoadingState = ({ hotels }) => hotels.loadingState;

const includesAll = (target, values) => values.every(x => target.includes(x));

export const getFilteredHotels = store => {
  const { loadingState, data } = store.hotels;
  const { appliedFilters } = store.filters;

  if (loadingState !== 'Success' || !size(data)) {
    return [];
  }

  if (!size(appliedFilters)) {
    return data;
  }

  return data.filter(hotel => includesAll(hotel.facilities, appliedFilters));
};
