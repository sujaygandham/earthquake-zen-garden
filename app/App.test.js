import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

describe("App routes work correctly", () => {
  beforeEach(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  });

  test("clicking the welcome header, goes to the profile page", () => {
    fireEvent.click(screen.getByRole("link", {name: /welcome sally/i}));
    expect(screen.getByRole("heading", { name: /profile/i})).toBeInTheDocument();
  });

  test("clicking the logo in the header from any view will return to home view", () => {
    fireEvent.click(screen.getByRole("link", {name: /welcome sally/i}));
    expect(screen.getByRole("heading", { name: /profile/i})).toBeInTheDocument();

    fireEvent.click(screen.getByRole("img", {name: /realtor logo/i}));
    expect(screen.getByRole("heading", { name: /usgs all earthquakes/i})).toBeInTheDocument();
  });

  test("clicking on one of the items in the list should go to the details view", () => {
    fireEvent.click(screen.getByRole("link", {name: /3km ENE of The Geysers, CA/i}));
    expect(screen.getByRole("heading", { name: /M 1.2 - 3km ENE of The Geysers, CA/i})).toBeInTheDocument();
  });
});
