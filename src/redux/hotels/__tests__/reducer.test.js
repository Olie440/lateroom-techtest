import {
  DATA_REQUESTED,
  DATA_RECEIVED,
  DATA_REQUEST_FAILED
} from "../../consts";
import reducer from "../reducer";

jest.mock("uuid/v4", () => () => "MOCK_UUID");

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

  describe(`${DATA_RECEIVED} action`, () => {
    it("sets state to 'Success'", () => {
      const action = {
        type: DATA_RECEIVED,
        payload: [{ foo: "bar" }, { bar: "foo" }]
      };

      const result = reducer({ data: "bar" }, action);

      expect(result.state).toEqual("Success");
    });

    it("Handles normal payloads", () => {
      const action = {
        type: DATA_RECEIVED,
        payload: [{ foo: "bar" }, { bar: "foo" }]
      };

      const result = reducer({ data: "bar" }, action);

      expect(result.data).toEqual([
        { id: "MOCK_UUID", foo: "bar" },
        { id: "MOCK_UUID", bar: "foo" }
      ]);
    });

    it("Handles malformed payloads", () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => null);

      const action = {
        type: DATA_RECEIVED,
        payload: { foo: "bar" }
      };

      const result = reducer({ data: "bar" }, action);

      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(result).toEqual({
        state: "Error",
        data: null
      });

      console.error.mockRestore();
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
