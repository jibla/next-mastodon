import PublishStatusBlock from "@/components/status/PublishStatusBlock";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    update: jest.fn(),
    data: { user: { name: "test", image: "test" } },
    status: "authenticated",
  }),
}));

describe("Publish new status component", () => {
  it("should render the textarea", () => {
    render(<PublishStatusBlock />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render authenticated user's name", () => {
    render(<PublishStatusBlock />);

    expect(screen.getByText("@test")).toBeInTheDocument();
  });

  it("when user puts text and clicks publish, newly created post or error should appear below", async () => {
    render(<PublishStatusBlock />);

    const textarea = screen.getByRole("textbox");
    const publishButton = screen.getByRole("button", { name: "Publish" });

    fireEvent.change(textarea, { target: { value: "Hello, world!" } });
    fireEvent.click(publishButton);

    await waitFor(
      () => {
        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
