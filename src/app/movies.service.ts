import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from './models/movie';
import { MovieList } from './models/movieList';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  /*
   * Gets a list of movies for a given query.
   * @returns {array} movies
   */
  public getMovies(): Observable<any> {
    return this.http
      .get<MovieList>(`${environment.baseURL}&s=${environment.movieQuery}`)
      .pipe(map(movies => movies.Search));
  }

  /*
   * Gets an object with movie details.
   * @returns {object} movie
   */
  public getMovie(imdbID: string): Observable<any> {
    return this.http
      .get<Movie>(`${environment.baseURL}&i=${imdbID}`)
      .pipe();
  }
}
