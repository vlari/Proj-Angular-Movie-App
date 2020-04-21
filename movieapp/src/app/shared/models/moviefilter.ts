import { query } from "@angular/animations";

export class Moviefilter {
  query_term?: string;
  genre?: string;
  order_by?: string;
  sort_by?: string;

  constructor(
    query_term?: string,
    genre?: string,
    order_by?: string,
    sort_by?: string
  ) {
    this.query_term = query_term;
    this.genre = genre;
    this.order_by = order_by;
    this.sort_by = sort_by;
  }
}
