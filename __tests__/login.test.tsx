import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import "@testing-library/jest-dom";

describe("Authentication flow", () => {
  it("renders login page component", () => {
    render(<LoginPage />);

    const input = screen.getByRole("textbox", {
      name: "Mastodon Server Address",
    });

    const button = screen.getByRole("button", {
      name: "Continue",
    });

    expect(button).toBeVisible();
  });
});
