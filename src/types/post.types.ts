export interface Post {
  title: string;
  description: string;
  author: string;
  pubDate: string;
  image?: {
    url: string;
    alt: string;
  };
  tags: string[];
}
