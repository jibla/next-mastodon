import StatusPage from "@/app/in/status/[id]/page";
import { StatusProps } from "@/lib/types/StatusProps";
import { render, screen } from "@testing-library/react";

describe("Status page component", () => {
  const mockData: StatusProps = {
    id: "110463308476950678",
    name: "Giorgi Jibladze",
    avatar: "mock-avatar-url",
    authorUrl: "mock-author-url",
    text: "Welcome to Next Mastodon - an open-source adventure where we're redefining the future of decentralized social media.",
    createdAt: "2023-09-05 15:13",
  };

  const params: { id: string } = { id: mockData.id };

  it("should render the name", () => {
    render(<StatusPage params={params} />);
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
  });

  it("should render the authorUrl", () => {
    render(<StatusPage params={params} />);
    expect(screen.getByText(mockData.authorUrl)).toBeInTheDocument();
  });

  it("should render the text", () => {
    render(<StatusPage params={params} />);
    expect(screen.getByText(mockData.text)).toBeInTheDocument();
  });

  it("should render the createdAt", () => {
    render(<StatusPage params={params} />);
    expect(screen.getByRole("date")).toHaveTextContent(mockData.createdAt);
  });

  it("should render the avatar", () => {
    render(<StatusPage params={params} />);
    // image does not exist
    expect(screen.getByText("NM")).toBeInTheDocument();
  });
});
