import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @ViewChild('pg') paginator: Paginator | undefined;
  search: string = '';

  movies: any[] = [];
  totalResults: any;

  constructor(private movieservice: MovieService) {}
  ngOnInit(): void {
    this.getMovies();
  }

  serch() {
    if (this.search) {
      this.movieservice.searchMovie(this.search).subscribe((res: any) => {
        this.movies = res.results.splice(0, 18);
        this.totalResults =
          res.total_results > 10000 ? 10000 : res.total_results;
        this.paginator?.changePage(0);
        // this.search = ""
      });
      return;
    }
    this.getMovies();
    this.paginator?.changePage(0);
  }

  getMovies(page: number = 1) {
    this.movieservice.getUpComming('popular', page).subscribe((res: any) => {
      this.movies = res.results.splice(0, 18);
      this.totalResults = res.total_results > 10000 ? 10000 : res.total_results;
    });
  }

  paginate(data: any) {
    let page = 1 + data.page;

    if (this.search) {
      this.movieservice
        .searchMovie(this.search, page)
        .subscribe((response: any) => {
          this.movies = response.results.splice(0, 18);
          this.totalResults =
            response.total_results > 10000 ? 10000 : response.total_results;
        });
      return;
    }

    this.movieservice
      .getUpComming('popular', page)
      .subscribe((response: any) => {
        this.movies = response.results.splice(0, 18);
        this.totalResults =
          response.total_results > 10000 ? 10000 : response.total_results;
      });
  }
}
