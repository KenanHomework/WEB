import React from "react";
import { shallow } from "enzyme";
import ListAndDetails from "./list-and-details";

describe("ListAndDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListAndDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
