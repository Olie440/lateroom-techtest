import { intersection, size } from "lodash";

export const hotelsAreLoading = ({ hotels }) => hotels.state === "Loading";
export const hotelsHaveError = ({ hotels }) => hotels.state === "Error";
export const hotelsHaveLoaded = ({ hotels }) => hotels.state === "Success";

export const filteredHotels = store => {
  const hotels = store.hotels.data;
  const filters = store.filters.appliedFilters;

  if (!hotelsHaveLoaded(store) || !size(hotels)) {
    return [];
  }

  if (!size(filters)) {
    return hotels;
  }

  return hotels.filter(x => intersection(x.facilities, filters).length);
};
