import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { AuthenticatedBlock } from "@/components/auth/AuthenticatedBlock";
import "@testing-library/jest-dom";

jest.mock("next-auth/react");

describe("AuthenticatedBlock", () => {
  beforeEach(() => {
    useSession.mockReturnValue({
      data: {
        user: { name: "Test User" },
      },
      status: "authenticated",
    });
  });

  it("renders without crashing", () => {
    render(<AuthenticatedBlock />);
  });

  it("displays user name when authenticated", () => {
    render(<AuthenticatedBlock />);
    expect(screen.getByText("Signed in as Test User")).toBeInTheDocument();
  });

  it("renders signout button when authenticated", () => {
    render(<AuthenticatedBlock />);

    const button = screen.getByRole("button", { name: "Sign out" });
    expect(button).toBeInTheDocument();
  });
});
