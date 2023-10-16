import Timeline from "@/components/feed/timeline";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Timeline integration tests", () => {
  test("Simple timeline is rendered", async () => {
    render(<Timeline type="public" />);

    const feed = await screen.findByRole("feed", {}, { timeout: 10000 });
    expect(feed).toBeInTheDocument();

    const statuses = await screen.findAllByRole("status");
    expect(statuses).toHaveLength(20);
  }, 15000);
});
