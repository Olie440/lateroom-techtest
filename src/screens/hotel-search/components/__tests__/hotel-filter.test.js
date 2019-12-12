import React from "react";
import { HotelFilter, Button } from "../hotel-filter.component";
import { shallow } from "enzyme";

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
    component = shallow(<HotelFilter {...props} />);
  });

  describe("when state.open = false", () => {
    it("only renders the filter button", () => {
      expect(component).toMatchSnapshot();
    });

    it("toggles state.open = true when clicked", () => {
      expect(component.state("open")).toEqual(false);
      component.find(Button).simulate("click");
      expect(component.state("open")).toEqual(true);
    });
  });

  describe("when state.open = true", () => {
    beforeEach(() => {
      component.setState({ open: true });
    });

    it("only renders the filter button", () => {
      expect(component).toMatchSnapshot();
    });

    it("toggles state.open = false when clicked", () => {
      expect(component.state("open")).toEqual(true);
      component.find(Button).simulate("click");
      expect(component.state("open")).toEqual(false);
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

    expect(component).toMatchSnapshot();
  });
});
