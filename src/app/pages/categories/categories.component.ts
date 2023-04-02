import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild('pg') paginator: Paginator | undefined;
  categorys: any[] = [];
  movies: any[] = [];
  totalResults: any;

  categoryName: any = 'select category';

  constructor(private movieservice: MovieService) {}
  ngOnInit(): void {
    this.getCategory();
    this.getMovies();
  }

  getCategory() {
    this.movieservice.categories().subscribe(({ genres }: any) => {
      this.categorys = genres;
      console.log(genres);
    });
  }

  getMovies(page: number = 1) {
    console.log(this.categoryName);

    if (this.categoryName == 'popular') {
      this.movieservice
        .getUpComming(this.categoryName)
        .subscribe((res: any) => {
          this.movies = res.results.splice(0, 18);
          this.totalResults =
            res.total_results > 10000 ? 10000 : res.total_results;
        });
      return;
    }

    this.movieservice
      .getMovieByCate(this.categoryName, page)
      .subscribe((res: any) => {
        this.movies = res.results.splice(0, 18);
        this.totalResults =
          res.total_results > 10000 ? 10000 : res.total_results;
        this.paginator?.changePageToFirst(0);
      });
  }

  paginate(data: any) {
    let page = 1 + data.page;

    if (this.categoryName) {
      this.movieservice
        .getMovieByCate(this.categoryName, page)
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
