import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css'],
})
export class ShowMoviesComponent implements OnInit {
  showMovie: any;

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.showMov(params.id));
  }

  showMov(idMovie: number) {
    this.movieservice.showMovie(idMovie).subscribe((res: any) => {
      this.showMovie = res;
    });
  }
}
