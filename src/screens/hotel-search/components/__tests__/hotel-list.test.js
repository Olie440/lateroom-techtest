import React from "react";
import { when } from "jest-when";
import { shallow } from "enzyme";

import * as useAction from "src/redux/use-action";
import * as ReactRedux from "react-redux";

import HotelList from "../hotel-list.component";
import mockHotels from "src/__mocks__/mock-hotels";
import {
  filteredHotels,
  hotelsAreLoading,
  hotelsHaveError,
  hotelsHaveLoaded
} from "src/redux/hotels/selectors";

describe("HotelList", () => {
  let useSelectorMock, useActionMock, loadHotelsMock;

  beforeEach(() => {
    useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
    useActionMock = jest.spyOn(useAction, "default");
    loadHotelsMock = jest.fn();

    useActionMock.mockReturnValue(loadHotelsMock);

    when(useSelectorMock)
      .calledWith(filteredHotels)
      .mockReturnValue([])
      .calledWith(hotelsAreLoading)
      .mockReturnValue(false)
      .calledWith(hotelsHaveError)
      .mockReturnValue(false)
      .calledWith(hotelsHaveLoaded)
      .mockReturnValue(false);
  });

  afterEach(() => {
    useSelectorMock.mockRestore();
    useActionMock.mockRestore();
  });

  it("calls the loadHotels action when loading = false, error = false and loaded = false", () => {
    shallow(<HotelList />);
    expect(loadHotelsMock).toHaveBeenCalled();
  });

  it("renders hotels correctly", () => {
    const hotels = mockHotels().map((hotel, index) => ({
      ...hotel,
      id: index
    }));

    when(useSelectorMock)
      .calledWith(filteredHotels)
      .mockReturnValue(hotels)
      .calledWith(hotelsHaveLoaded)
      .mockReturnValue(true);

    const component = shallow(<HotelList />);

    expect(component).toMatchSnapshot();
  });

  it("renders the loading component when loading = true", () => {
    when(useSelectorMock)
      .calledWith(hotelsAreLoading)
      .mockReturnValue(true);

    const component = shallow(<HotelList />);
    expect(component).toMatchSnapshot();
  });

  it("renders the error component when error = true", () => {
    when(useSelectorMock)
      .calledWith(hotelsHaveError)
      .mockReturnValue(true);

    const component = shallow(<HotelList />);
    expect(component).toMatchSnapshot();
  });
});
