import { NewsSource } from './news-source.model';

export class News {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  Content: string;

  constructor(
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
    name: string,
    id?: string
  ) {
    this.source.id = id;
    this.source.name = name;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.Content = content;
  }
}
