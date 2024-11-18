import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";
import "@testing-library/jest-dom";

describe("Skill Module testing", () => {
  test("Should have skill test box", () => {
    render(<Loading />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
