import React from "react";
import FilterMenu, { Button, Menu } from "../hotel-filter-menu";
import { mount } from "enzyme";
import { when } from "jest-when";

import * as ReactRedux from "react-redux";

import { filtersSelector } from "src/redux/filters/selectors";
import * as useAction from "src/redux/use-action";

describe("FilterMenu", () => {
  let useSelectorMock, useActionMock, toggleFilterMock;

  beforeEach(() => {
    useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
    useActionMock = jest.spyOn(useAction, "default");
    toggleFilterMock = jest.fn();

    useActionMock.mockReturnValue(toggleFilterMock);

    when(useSelectorMock)
      .calledWith(filtersSelector)
      .mockReturnValue([
        { name: "car park", checked: true },
        { name: "pool", checked: false },
        { name: "gym", checked: false }
      ]);
  });

  afterEach(() => {
    useSelectorMock.mockRestore();
    useActionMock.mockRestore();
  });

  describe("Filter Button", () => {
    it("only renders the filter button", () => {
      const component = mount(<FilterMenu />);
      expect(component.find(Menu).length).toEqual(0);
    });

    it("toggles the Menu when clicked", () => {
      const component = mount(<FilterMenu />);
      component.find(Button).simulate("click");
      expect(component.find(Menu).length).toEqual(1);

      component.find(Button).simulate("click");
      expect(component.find(Menu).length).toEqual(0);
    });
  });

  describe("Filter Menu", () => {
    let component;

    beforeEach(() => {
      component = mount(<FilterMenu />);
      component.find(Button).simulate("click");
    });

    it("calls toggleFilter with the name and false when a checked filter is clicked", () => {
      const fakeEvent = {
        target: {
          value: "car park",
          checked: false
        }
      };
      component
        .find("input")
        .at(0)
        .simulate("change", fakeEvent);
      expect(toggleFilterMock).toHaveBeenCalledWith("car park", false);
    });

    it("calls toggleFilter with the name and true when a unchecked filter is clicked", () => {
      const fakeEvent = {
        target: {
          value: "car park",
          checked: true
        }
      };
      component
        .find("input")
        .at(0)
        .simulate("change", fakeEvent);
      expect(toggleFilterMock).toHaveBeenCalledWith("car park", true);
    });
  });

  it("disables the button when filters.length = 0", () => {
    when(useSelectorMock)
      .calledWith(filtersSelector)
      .mockReturnValue([]);

    const component = mount(<FilterMenu />);
    expect(component.find(Button).prop("disabled")).toEqual(true);
  });
});
