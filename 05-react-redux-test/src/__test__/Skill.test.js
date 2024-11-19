import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Skill from "../components/Skill";

describe("Skill Module testing", () => {
  test("Should have skill test box", () => {
    render(
      <Provider store={appStore}>
        <Skill />
      </Provider>
    );
    const textBox = screen.getByRole("textbox");
    expect(textBox).toBeInTheDocument();
  });
});
