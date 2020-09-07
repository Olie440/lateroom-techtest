import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from '../consts';

export const loadHotelsAction = async dispatch => {
  dispatch({
    type: DATA_REQUESTED,
  });

  try {
    const response = await fetch('http://localhost:4000/hotels');
    const data = await response.json();
    dispatch({
      type: DATA_RECEIVED,
      payload: data,
    });
  } catch {
    dispatch({
      type: DATA_REQUEST_FAILED,
    });
  }
};
