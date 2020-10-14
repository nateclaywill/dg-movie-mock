import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  decades = [1980, 1990, 2000, 2010];
  selectedDecade: number;
  movieList: Movie[];
  filteredMovies: Movie[];

  constructor(public movieSvc: MoviesService) { }

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe((movies) => {
      this.movieList = movies;
      this.filteredMovies = movies;
    });
  }

  /*
   * Toggles filter tabs and filters movies by decade.
   */
  filterByDecade(decade): void {
    if (this.selectedDecade === decade) {
      this.selectedDecade = null;
      this.filteredMovies = this.movieList;
      return;
    } else {
      this.selectedDecade = decade;
      const nextDecade = decade + 10;
      this.filteredMovies = this.movieList.filter((movie) => {
        const year = parseInt(movie.Year, 10);
        return year >= decade && year < nextDecade;
      });
    }
  }

}
