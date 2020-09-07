export const filtersSelector = ({ filters }) =>
  filters.availableFilters.map(filter => {
    return {
      name: filter,
      checked: filters.appliedFilters.includes(filter),
    };
  });
