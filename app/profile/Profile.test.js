import { render, screen } from "@testing-library/react";
import React from "react";
import { Profile } from "./Profile";

test("Profile is rendered correctly", () => {
  render(<Profile />);

  expect(screen.getByRole("heading", { name: /profile/i})).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /sally wang/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /first name sally/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /last name wang/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /phone 01-343-989-2345/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /email sw@nowhere.ic.kp/i})).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /bio lorem ipsum/i})).toBeInTheDocument();
});
