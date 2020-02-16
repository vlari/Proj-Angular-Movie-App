import { HeadLine } from './headline.model';

export class NewsResponse {
    articles: HeadLine[];
    status: string;
    totalResults: number;
}