import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
  render(<Card
    caption={TEST_IMAGES.caption}
    src={TEST_IMAGES.src}
  />)
})

it("matches snapshot", () => {
  const { asFragment } = render(<Card
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(asFragment()).toMatchSnapshot();
})