import MockFetch from "../../../../__mocks__/mock-fetch";
import mockHotels from "../../../../__mocks__/mock-hotels";

import {
  DATA_REQUESTED,
  DATA_RECEIVED,
  DATA_REQUEST_FAILED
} from "../../consts";
import { loadHotelsAction } from "../actions";

describe("loadHotels Action", () => {
  let mockFetch, mockDispatch;

  beforeEach(() => {
    mockFetch = MockFetch();
    mockDispatch = jest.fn();
  });

  afterEach(() => {
    mockFetch.unmock();
  });

  it(`dispatches a ${DATA_REQUESTED} action`, async () => {
    await loadHotelsAction()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: DATA_REQUESTED
    });
  });

  it("it requests the data from correct url", async () => {
    await loadHotelsAction()(mockDispatch);
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/hotels");
  });

  it(`dispatches a ${DATA_REQUEST_FAILED} when fetch returns an error`, async () => {
    await loadHotelsAction()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: DATA_REQUEST_FAILED
    });
  });

  it(`dispatches a ${DATA_RECEIVED} action with the received data`, async () => {
    const expectedData = mockHotels();
    mockFetch.mockRequest("http://localhost:4000/hotels", expectedData);

    await loadHotelsAction()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: DATA_RECEIVED,
      payload: expectedData
    });
  });
});
