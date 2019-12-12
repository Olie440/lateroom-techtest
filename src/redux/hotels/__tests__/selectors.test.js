import mockHotels from "src/__mocks__/mock-hotels";
import { filteredHotels } from "../selectors";

describe("filteredHotels", () => {
  it("returns an empty array when hotels.state is not 'success", () => {
    const result = filteredHotels({
      hotels: { state: "Loading", data: null },
      filters: {}
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array when hotels.data is null", () => {
    const result = filteredHotels({
      hotels: { state: "Success", data: null },
      filters: {}
    });
    expect(result).toEqual([]);
  });

  it("returns hotels.data when they are no filters", () => {
    const result = filteredHotels({
      hotels: { state: "Success", data: mockHotels() },
      filters: {}
    });
    expect(result).toEqual(mockHotels());
  });

  it("returns a filtered list  when they are filters", () => {
    const mockData = [
      { foo: "bar", facilities: ["bar"] },
      { foo: "foo", facilities: ["foo"] },
      { foo: "baz", facilities: [] }
    ];
    const result = filteredHotels({
      hotels: { state: "Success", data: mockData },
      filters: { appliedFilters: ["bar"] }
    });

    expect(result).toEqual([{ foo: "bar", facilities: ["bar"] }]);
  });
});
