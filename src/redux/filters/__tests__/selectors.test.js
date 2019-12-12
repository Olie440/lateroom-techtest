import { filtersSelector } from "../selectors";

describe("filters selector", () => {
  it("outputs the correct format and adds the checked property", () => {
    const result = filtersSelector({
      filters: {
        appliedFilters: ["car park"],
        availableFilters: ["car park", "pool", "gym"]
      }
    });

    expect(result).toEqual([
      { name: "car park", checked: true },
      { name: "pool", checked: false },
      { name: "gym", checked: false }
    ]);
  });
});
