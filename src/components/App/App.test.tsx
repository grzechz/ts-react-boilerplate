import React from "react";
import { App } from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("ts-react-boilerplate")).toBeVisible();
  });
});
