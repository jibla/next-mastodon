import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

afterEach(() => {
  fetchMock.resetMocks();
});

describe("Login Page unit tests", () => {
  it("should show server address input and continue button, when rendered", () => {
    render(<LoginPage />);

    const input = screen.getByRole("textbox", {
      name: "Mastodon Server Address",
    });

    const button = screen.getByRole("button", {
      name: "Continue",
    });

    expect(button).toBeVisible();
  });

  it("it should show Sign in buttton when correct mastodon address is entered and continue is clicked", async () => {
    const serverAddress = "https://mastodon.social";

    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

    render(<LoginPage />);

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Mastodon Server Address"), {
      target: { value: serverAddress },
    });

    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(fetch).toHaveBeenCalledWith(
      `/api/validate-server/${btoa(serverAddress)}`,
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).toBeInTheDocument();
  });

  it("should show the error text, when incorrect or brokern address is entered and continue is clicked", async () => {
    const serverAddress = "https://mastodon.social";

    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 400 });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Mastodon Server Address"), {
      target: { value: serverAddress },
    });

    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(fetch).toHaveBeenCalledWith(
      `/api/validate-server/${btoa(serverAddress)}`,
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    expect(
      screen.queryByText("This mastodon server does not exist or is broken"),
    ).toBeInTheDocument();
  });

  it("should show the error test, when invalid URL is entered and continue clicked", async () => {
    const serverAddress = "https://mastodon.social";

    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 400 });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Mastodon Server Address"), {
      target: { value: serverAddress },
    });

    fireEvent.click(screen.getByText("Continue"));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(fetch).toHaveBeenCalledWith(
      `/api/validate-server/${btoa(serverAddress)}`,
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();

    expect(screen.queryByText("This is not the valid URL")).toBeInTheDocument();
  });
});
