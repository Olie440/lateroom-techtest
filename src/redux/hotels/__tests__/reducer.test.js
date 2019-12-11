import {
  DATA_REQUESTED,
  DATA_RECEIVED,
  DATA_REQUEST_FAILED
} from "../../consts";
import reducer from "../reducer";

describe("Hotels Reducer", () => {
  it("returns the current state for un reconised actions", () => {
    const result = reducer({ data: "bar" });
    expect(result).toEqual({ data: "bar" });
  });

  it(`sets data to null and state to 'Loading' for a ${DATA_REQUESTED} action`, () => {
    const result = reducer({ data: "bar" }, { type: DATA_REQUESTED });
    expect(result).toEqual({
      state: "Loading",
      data: null
    });
  });

  it(`sets data to payload and state to 'Success' for a ${DATA_RECEIVED} action`, () => {
    const action = {
      type: DATA_RECEIVED,
      payload: "payload"
    };

    const result = reducer({ data: "bar" }, action);

    expect(result).toEqual({
      state: "Success",
      data: "payload"
    });
  });

  it(`sets data to null and state to 'Error' for a ${DATA_REQUEST_FAILED} action`, () => {
    const result = reducer({ data: "bar" }, { type: DATA_REQUEST_FAILED });
    expect(result).toEqual({
      state: "Error",
      data: null
    });
  });

  it("returns the default state when nothing is passed into it", () => {
    const result = reducer();

    expect(result).toEqual({
      state: "None",
      data: null
    });
  });
});
