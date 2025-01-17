import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

describe("Skill Module testing", () => {
  test("Should have skill test box", () => {
    render(<Loading />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
