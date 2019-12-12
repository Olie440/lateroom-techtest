import { ADD_FILTER, REMOVE_FILTER } from "../../consts";
import { toggleFilterAction } from "../actions";

describe("toggleFilter Action", () => {
  it(`it dispatches a ${ADD_FILTER} action when applied = true`, () => {
    const result = toggleFilterAction("test", true);
    expect(result).toEqual({
      type: ADD_FILTER,
      payload: "test"
    });
  });

  it(`it dispatches a ${REMOVE_FILTER} action when applied = false`, () => {
    const result = toggleFilterAction("test", false);
    expect(result).toEqual({
      type: REMOVE_FILTER,
      payload: "test"
    });
  });
});
