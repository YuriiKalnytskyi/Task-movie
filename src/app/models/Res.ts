import {Movie} from "./Movie";

export interface Res {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
