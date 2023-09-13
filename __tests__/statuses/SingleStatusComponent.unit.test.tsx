import SingleStatus from "@/components/status/singleStatus";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Status page component", () => {
  const mockStatus = {
    id: "110463308476950678",
    name: "Giorgi Jibladze",
    avatar: "mock-avatar-url",
    authorUrl: "mock-author-url",
    text: "Welcome to Next Mastodon - an open-source adventure where we're redefining the future of decentralized social media.",
    createdAt: "2023-09-05 15:13",
  };

  it("should render the all the content", () => {
    render(<SingleStatus {...mockStatus} />);
    expect(screen.getByText(mockStatus.name)).toBeInTheDocument();
  });

  it("should render the authorUrl", () => {
    render(<SingleStatus {...mockStatus} />);
    expect(screen.getByText(mockStatus.authorUrl)).toBeInTheDocument();
  });

  it("should render the text", () => {
    render(<SingleStatus {...mockStatus} />);
    expect(screen.getByText(mockStatus.text)).toBeInTheDocument();
  });

  it("should render the createdAt", () => {
    render(<SingleStatus {...mockStatus} />);
    expect(screen.getByRole("date")).toHaveTextContent(mockStatus.createdAt);
  });

  it("should render the avatar", () => {
    render(<SingleStatus {...mockStatus} />);
    // image does not exist
    expect(screen.getByText("NM")).toBeInTheDocument();
  });
});
