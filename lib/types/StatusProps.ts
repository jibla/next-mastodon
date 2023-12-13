export interface StatusProps {
  id: string;
  name: string;
  avatar: string;
  authorUrl: string;
  text: string;
  createdAt: string;
  sharesCount: number;
  commentsCount: number;
  likesCount: number;
  images: [
    {
      previewUrl: string | undefined | null;
      fullUrl: string | undefined | null;
    },
  ];
}
