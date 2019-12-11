import React from "react";
import { HotelList } from "../hotel-list.component";
import mockHotels from "../../../../../__mocks__/mock-hotels";
import { shallow } from "enzyme";

describe("HotelList", () => {
  let component, props;

  beforeEach(() => {
    props = {
      loadHotels: jest.fn(),
      loading: false,
      error: false,
      loaded: false,
      hotels: []
    };
    component = shallow(<HotelList {...props} />);
  });

  it("calls the loadHotels action when loading = false, error = false and loaded = false", () => {
    expect(props.loadHotels).toHaveBeenCalled();
  });

  it("renders hotels correctly", () => {
    component.setProps({
      loaded: true,
      hotels: mockHotels().map((hotel, index) => ({ ...hotel, id: index }))
    });
    expect(component).toMatchSnapshot();
  });

  it("renders the loading component when loading = true", () => {
    component.setProps({
      loading: true
    });

    expect(component).toMatchSnapshot();
  });

  it("renders the error component when error = true", () => {
    component.setProps({
      error: true
    });

    expect(component).toMatchSnapshot();
  });
});
