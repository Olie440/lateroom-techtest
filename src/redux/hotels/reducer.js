import uuid from 'uuid/v4';
import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from '../consts';

const defaultState = {
  loadingState: 'Loading',
  data: null,
};

export default function (state = defaultState, { type, payload } = {}) {
  switch (type) {
    case DATA_REQUESTED:
      return defaultState;

    case DATA_REQUEST_FAILED:
      return { loadingState: 'Error', data: null };

    case DATA_RECEIVED:
      return payloadToHotels(payload);

    default:
      return state;
  }
}

function payloadToHotels(payload) {
  try {
    return {
      loadingState: 'Success',
      data: payload.map(hotel => ({ id: uuid(), ...hotel })),
    };
  } catch (e) {
    console.error(e);
    return { loadingState: 'Error', data: null };
  }
}
