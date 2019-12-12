export const filtersSelector = ({ filters }) =>
  filters.availableFilters.map(filter => {
    const checked = filters.appliedFilters.includes(filter);
    return {
      name: filter,
      checked
    };
  });
