import uuid from "uuid/v4";
import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from "../consts";

const defaultState = {
  state: "None",
  data: null
};

export default function(state = defaultState, { type, payload } = {}) {
  switch (type) {
    case DATA_REQUESTED:
      return { state: "Loading", data: null };

    case DATA_RECEIVED:
      return payloadToHotels(payload);

    case DATA_REQUEST_FAILED:
      return { state: "Error", data: null };

    default:
      return state;
  }
}

function payloadToHotels(payload) {
  try {
    return {
      state: "Success",
      data: payload.map(hotel => ({ id: uuid(), ...hotel }))
    };
  } catch (e) {
    console.error(e);
    return { state: "Error", data: null };
  }
}
