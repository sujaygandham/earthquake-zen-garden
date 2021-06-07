import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./Nav";

test("Nav bar is rendered correctly", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /realtor logo/i})).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /earthquake zen garden/i})).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /welcome sally/i})).toBeInTheDocument();
});
