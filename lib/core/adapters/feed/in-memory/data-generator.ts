function getRandomName() {
  const names = ["Giorgi", "Mariam", "Nino", "Davit", "Luka"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAvatar() {
  const avatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
}

function getRandomAuthorUrl() {
  const names = ["Giorgi", "Mariam", "Nino", "Davit", "Luka"];
  return `https://mastodon.social/@${
    names[Math.floor(Math.random() * names.length)]
  }`;
}

function getRandomDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toISOString();
}

function getRandomText() {
  const texts = [
    "Just had a wonderful coffee!",
    "Anyone has recommendations for good movies?",
    "Reading a new book and it's absolutely thrilling!",
    "Mastodon is such a great platform!",
    "Visited a new city today. Loved it!",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

function generateMockStatus() {
  return {
    name: getRandomName(),
    avatar: getRandomAvatar(),
    authorUrl: getRandomAuthorUrl(),
    createdAt: getRandomDate(),
    text: getRandomText(),
  };
}

export function generateFeedMockData(): any[] {
  const feed = Array(20)
    .fill(0)
    .map((_) => generateMockStatus());

  return feed;
}
