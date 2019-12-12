export const filters = store =>
  store.availableFilters.map(filter => {
    const checked = store.appliedFilters.includes(filter);
    return {
      name: filter,
      checked
    };
  });
