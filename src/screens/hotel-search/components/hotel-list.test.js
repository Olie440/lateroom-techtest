import React from "react";
import { HotelList, mapStateToProps } from "./hotel-list.component";
import mockHotels from "../../../../__mocks__/mock-hotels";
import { shallow } from "enzyme";

describe("HotelList", () => {
  let component, props;

  beforeEach(() => {
    props = {
      loadHotels: jest.fn(),
      appliedFilters: [],
      hotels: {
        state: "None",
        data: null
      }
    };
    component = shallow(<HotelList {...props} />);
  });

  it('renders nothing and calls the loadHotels action when state = "None"', () => {
    expect(component).toMatchSnapshot();
    expect(props.loadHotels).toHaveBeenCalled();
  });
  describe('when state = "Success"', () => {
    beforeEach(() => {
      component.setProps({
        hotels: {
          state: "Success",
          data: mockHotels()
        }
      });
    });

    it("renders all hotels when appliedFilters is empty", () => {
      expect(component).toMatchSnapshot();
    });

    it("renders filtered hotels when appliedFilters is not empty", () => {
      component.setProps({
        appliedFilters: ["pool", "gym"]
      });
      expect(component).toMatchSnapshot();
    });
  });

  it('renders the loading component when state = "Loading"', () => {
    component.setProps({
      hotels: {
        state: "Loading",
        data: null
      }
    });

    expect(component).toMatchSnapshot();
  });

  it('renders the error component when state = "Error"', () => {
    component.setProps({
      hotels: {
        state: "Error",
        data: null
      }
    });

    expect(component).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("returns the hotels and appliedFilters from the state", () => {
    const result = mapStateToProps({
      foo: "bar",
      hotels: mockHotels(),
      filters: {
        appliedFilters: ["pool"]
      }
    });

    expect(result).toEqual({
      hotels: mockHotels(),
      appliedFilters: ["pool"]
    });
  });
});
