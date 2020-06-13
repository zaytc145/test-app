import React from "react";
import Wrapper from "../../../testing-utils/store-wrapper";
import { render } from "@testing-library/react";
import Login from "../index";

describe("<Login/>", () => {
  it("Render in Login Button in DOM ", () => {
    const { getByText } = render(<Login />, { wrapper: Wrapper });
    const submitButtom = getByText("Login");
    expect(submitButtom).toBeInTheDocument();
  });
  it("Rendered Inputs", () => {
    const {getBy} = render(<Login />, { wrapper: Wrapper });
  });
});
