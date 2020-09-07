import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadHotelsAction } from 'src/redux/hotels/actions';
import { getFilteredHotels, getLoadingState } from 'src/redux/hotels/selectors';

export default function useHotels() {
  const dispatch = useDispatch();
  const hotels = useSelector(getFilteredHotels);
  const loadingState = useSelector(getLoadingState);

  useEffect(() => {
    dispatch(loadHotelsAction);
  }, [dispatch]);

  return { hotels, loadingState };
}
