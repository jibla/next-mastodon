import PublishStatus from "@/components/status/publishStatus";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";

describe("Publish new status component", () => {
  it("should render the textarea", () => {
    render(
      <SessionProvider>
        <PublishStatus />
      </SessionProvider>,
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("when user puts text and clicks publish, newly created post or error should appear below", () => {
    render(
      <SessionProvider>
        <PublishStatus />
      </SessionProvider>,
    );

    const textarea = screen.getByRole("textbox");
    const publishButton = screen.getByRole("button", { name: "Publish" });

    fireEvent.change(textarea, { target: { value: "Hello, world!" } });
    fireEvent.click(publishButton);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
