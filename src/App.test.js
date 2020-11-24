import { render } from "@testing-library/react";
import MainScreen from "./pages/MainScreen";

test("Render page correctly", () => {
  const { queryByTestId } = render(<MainScreen />);
  expect(queryByTestId("mainscreen-container")).toBeTruthy();
});
