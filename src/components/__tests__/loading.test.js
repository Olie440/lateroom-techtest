import React from "react";
import Loading from "../loading.component";
import { shallow } from "enzyme";

describe("<Loading />", () => {
  it("renders correctly", () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });

  it("displays the passed in message", () => {
    const component = shallow(<Loading message="testestets" />);
    expect(component).toMatchSnapshot();
  });
});
