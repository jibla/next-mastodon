import SignInForm from "@/components/auth/SignInForm";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { fillAddressAndClickContinue, mockFetchResponse } from "./utils";

const serverAddress = "https://mastodon.social";

describe("Integration tests for authentication flow", () => {
  test("sign in button is clicked and session cookie is set finally", async () => {
    render(<SignInForm />);

    mockFetchResponse({}, 200);

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).toBeInTheDocument();

    // click sign in button
    const signinButton = screen.getByRole("button", {
      name: "Sign in",
    });

    await fireEvent.click(signinButton);
  });
});
