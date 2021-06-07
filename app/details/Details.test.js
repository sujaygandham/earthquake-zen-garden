import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { Details } from "./Details";

test("Details page is rendered correctly", () => {
  render(
    <MemoryRouter initialEntries={["details/nc72999021"]}>
      <Route path="details/:id">
        <Details />
      </Route>
    </MemoryRouter>
  );
  
  expect(screen.getByRole("row", { name: /Title M 1.2 - 3km ENE of The Geysers, CA/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Magnitude 1.19/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Time Apr 13, 2018, 12:04 PM/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Status automatic/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Tsunami 0/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Type earthquake/i})).toBeInTheDocument();
});
