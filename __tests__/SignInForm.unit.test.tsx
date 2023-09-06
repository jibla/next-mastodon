import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import SignInForm from "@/components/auth/SignInForm";
import { fillAddressAndClickContinue, mockFetchResponse } from "./utils";

afterEach(() => {
  fetchMock.resetMocks();
});

const serverAddress = "https://mastodon.social";

describe("Sign in form unit tests", () => {
  test("initial render - input and continue are shown, errors are absent.", () => {
    render(<SignInForm />);

    const input = screen.getByRole("textbox", {
      name: "Mastodon Server Address",
    });
    expect(input).toBeVisible();

    const button = screen.getByRole("button", {
      name: "Continue",
    });
    expect(button).toBeVisible();

    const errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();

    const signinButton = screen.queryByText("Sign in");
    expect(signinButton).toBeNull();
  });

  test("correct mastodon address is entered - sign in is shown, errors are absent.", async () => {
    render(<SignInForm />);

    mockFetchResponse({}, 200);

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).toBeInTheDocument();

    const errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });

  it("invalid mastodon address is entered - error is shown, sign in is absent", async () => {
    render(<SignInForm />);

    mockFetchResponse(
      {
        code: "ConnectionFailure",
      },
      400,
    );

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    const errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    expect(
      screen.queryByText(
        "Unable to connect. Please verify the Mastodon server is operational and try again.",
      ),
    ).toBeInTheDocument();
  });

  it("invalid URL is entered - error is shown, sign in is absent.", async () => {
    render(<SignInForm />);

    mockFetchResponse(
      {
        code: "InvalidURLFormat",
      },
      400,
    );

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    const errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    expect(
      screen.queryByText(
        "The URL entered is invalid. Please check the format and try again.",
      ),
    ).toBeInTheDocument();
  });

  it("first, error is triggered, then correct address is entered, error should go.", async () => {
    render(<SignInForm />);

    mockFetchResponse(
      {
        code: "InvalidURLFormat",
      },
      400,
    );

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    expect(
      screen.queryByText(
        "The URL entered is invalid. Please check the format and try again.",
      ),
    ).toBeInTheDocument();

    fetchMock.resetMocks();

    mockFetchResponse({}, 200);

    await fillAddressAndClickContinue(serverAddress);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).toBeInTheDocument();

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
