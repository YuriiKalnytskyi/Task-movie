import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Res} from "../models/Res";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {Video} from "../models/Video";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https:/api.themoviedb.org/3/'
  private API_KEY = "?api_key=288bb0de612c607f61e04659a2cd2f04"
  private page = '&page='
  private movie = 'discover/movie'

  constructor(private httpClient: HttpClient) {
  }

  getMovie(page: number): Observable<Res> {
    return this.httpClient.get<Res>(this.baseUrl + this.movie + this.API_KEY + this.page + page)
  }

  getMovieId(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.baseUrl + "movie/" + id + this.API_KEY)
  }

  getVideo(id: number): Observable<Video> {
    return this.httpClient.get<Video>(this.baseUrl + "movie/" + id + "/videos" + this.API_KEY)
  }

  searchFilm(text: string): Observable<Res> {
    return this.httpClient.get<Res>(this.baseUrl + 'search/movie' + this.API_KEY + '&query=' + text)
  }

}
