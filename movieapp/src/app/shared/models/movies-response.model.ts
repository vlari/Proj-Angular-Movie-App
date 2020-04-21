import { MovieResponseContent } from "./movie-response-content.model";
import { MovieResponse } from "./movie-response.model";

export class MoviesResponse implements MovieResponse {
  data: MovieResponseContent;
}
