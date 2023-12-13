import StatusComponent from "@/components/feed/status";
import { formatRelativeDate } from "@/components/shared/relativeDate";
import { Status } from "@/lib/data/core/entities/Status";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

//TODO: write tests for working avatar / fallback.
//TODO: write tests for actions with different states
//TODO: write tests for date formatting not just matching the text
//TODO: write tests that media is shown
//TODO: write tests that links are clickable
//TODO: write tests to check open original link action
//TODO: write tests to check expand post action
//TODO: write tests to check copy link to post action
//TODO: write tests to check embed action
//TODO: write tests to check mute action
//TODO: write tests to check block action
//TODO: write tests to check filter action
//TODO: write tests to check report action
//TODO: write tests to check block domain action

describe("Status component", () => {
  const mockData: Status = {
    id: "mock-id",
    name: "Giorgi Jibladze",
    avatar: "mock-avatar-url",
    authorUrl: "mock-author-url",
    text: "Welcome to Next Mastodon - an open-source adventure where we're redefining the future of decentralized social media.",
    createdAt: "2023-09-05 15:13",
    sharesCount: 0,
    commentsCount: 0,
    likesCount: 0,
    images: [],
  };

  it("should render the name", () => {
    render(<StatusComponent status={mockData} />);
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
  });

  it("should render the authorUrl", () => {
    render(<StatusComponent status={mockData} />);
    expect(screen.getByText(mockData.authorUrl)).toBeInTheDocument();
  });

  it("should render the text", () => {
    render(<StatusComponent status={mockData} />);
    expect(screen.getByText(mockData.text)).toBeInTheDocument();
  });

  it("should render the createdAt", () => {
    render(<StatusComponent status={mockData} />);
    const formattedDate = formatRelativeDate(mockData.createdAt);
    expect(screen.getByRole("date")).toHaveTextContent(formattedDate);
  });
});
