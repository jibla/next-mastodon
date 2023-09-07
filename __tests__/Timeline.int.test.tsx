import Timeline from "@/components/feed/timeline";
import { act, render, screen } from "@testing-library/react";

describe("Timeline integration tests", () => {
  test("Simple timeline is rendered", async () => {
    render(<Timeline type="public" />);

    const feed = await screen.findAllByText("Giorgi");

    console.log(feed);

    expect(feed).not.toBeNull();
  });
});
