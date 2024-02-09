export interface StatusImage {
  previewUrl: string | undefined | null;
  fullUrl: string | undefined | null;
  fullWidth: number | undefined | null;
  fullHeight: number | undefined | null;
  hash: string | undefined | null;
}

export interface Status {
  id: string;
  name: string;
  avatar: string;
  authorUrl: string;
  text: string;
  createdAt: string;
  sharesCount: number;
  commentsCount: number;
  likesCount: number;
  images?: StatusImage[];
  favourited: boolean;
  bookmarked: boolean;
  shared: boolean;
  reblogged: Status | undefined;
  sensitive: boolean;
}
