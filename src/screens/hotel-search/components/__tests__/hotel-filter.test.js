import React from "react";
import { HotelFilter, Button, Menu } from "../hotel-filter.component";
import { mount } from "enzyme";

describe("HotelFilter", () => {
  let component, props;

  beforeEach(() => {
    props = {
      toggleFilter: jest.fn(),
      filters: [
        { name: "car park", checked: true },
        { name: "pool", checked: false },
        { name: "gym", checked: false }
      ]
    };
    component = mount(<HotelFilter {...props} />);
  });

  describe("Filter Button", () => {
    it("only renders the filter button", () => {
      expect(component.find(Menu).length).toEqual(0);
    });

    it("toggles the Menu when clicked", () => {
      component.find(Button).simulate("click");
      expect(component.find(Menu).length).toEqual(1);

      component.find(Button).simulate("click");
      expect(component.find(Menu).length).toEqual(0);
    });
  });

  describe("Filter Menu", () => {
    beforeEach(() => {
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
      expect(props.toggleFilter).toHaveBeenCalledWith("car park", false);
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
      expect(props.toggleFilter).toHaveBeenCalledWith("car park", true);
    });
  });

  it("disables the button when filters.length = 0", () => {
    component.setProps({
      filters: []
    });
    expect(component.find(Button).prop("disabled")).toEqual(true);
  });
});
