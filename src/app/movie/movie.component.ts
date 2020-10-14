import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  @Input() imdbID: string;
  movie: Movie;

  constructor(private moviesSvc: MoviesService) { }

  ngOnInit(): void {
    this.moviesSvc.getMovie(this.imdbID).subscribe((movie) => {
      this.movie = movie;
    });
  }

}
