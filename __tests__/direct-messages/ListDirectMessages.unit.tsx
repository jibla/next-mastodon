import DirectMessagesLeft from "@/app/in/@left/dm/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("List Direct Messages Unit Testing", () => {
  test("List of direct messages rendered", async () => {
    render(<DirectMessagesLeft />);

    const dmListItemButton = await screen.findAllByRole(
      "direct-message-list-item",
      {},
      { timeout: 10000 },
    );

    expect(dmListItemButton).toBeInstanceOf(Array);
    expect(dmListItemButton.length).toBeGreaterThan(0);
  }, 15000);
});
