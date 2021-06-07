import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Home";

test("Home page is rendered correctly", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  
  expect(screen.getByRole("heading", { name: /USGS All Earthquakes, Past Hour/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /title magnitude time/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /3km ENE of The Geysers, CA 1.19 Apr 13, 2018, 12:04 PM/i})).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /3km ENE of The Geysers, CA/i})).toBeInTheDocument();
});

test("on title column click, toggle sort order and sort", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  
  fireEvent.click(screen.getByText(/title/i));
  expect(screen.getByLabelText(/up-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("place")[0].textContent).toEqual("3km ENE of The Geysers, CA");

  fireEvent.click(screen.getByText(/title/i));
  expect(screen.getByLabelText(/down-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("place")[0].textContent).toEqual("133km WSW of Ruby, Alaska");
});

test("on magnitude column click, toggle sort order and sort", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  
  fireEvent.click(screen.getByText(/magnitude/i));
  expect(screen.getByLabelText(/up-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("magnitude")[0].textContent).toEqual("0.54");

  fireEvent.click(screen.getByText(/magnitude/i));
  expect(screen.getByLabelText(/down-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("magnitude")[0].textContent).toEqual("5.3");
});

test("on time column click, toggle sort order and sort", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  
  fireEvent.click(screen.getByText(/time/i));
  expect(screen.getByLabelText(/up-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("time")[0].textContent).toEqual("Apr 13, 2018, 11:04 AM");

  fireEvent.click(screen.getByText(/time/i));
  expect(screen.getByLabelText(/down-arrow/i)).toBeInTheDocument();

  expect(screen.getAllByTestId("time")[0].textContent).toEqual("Apr 13, 2018, 12:04 PM");
});
