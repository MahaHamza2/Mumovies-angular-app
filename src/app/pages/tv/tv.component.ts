import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  tvshows: any[] = [];
  popular: any[] = [];

  currentPage: number = 1;
  totalResults: number = 0;

  constructor(private movieservice: MovieService) {}

  ngOnInit(): void {
    this.getAllTv();
    this.getPopular(this.currentPage);
  }

  getAllTv() {
    this.movieservice.getTv().subscribe(({ results }: any) => {
      this.tvshows = results;
    });
  }

  getPopular(page: number = 1) {
    this.movieservice.getPopularTv().subscribe((res: any) => {
      this.totalResults = res.total_results;
      const startIndex = (page - 1) * 6;
      this.popular = res.results.slice(startIndex, startIndex + 6);
    });
  }

  paginate(event: any) {
    this.currentPage = event.page + 1;
    this.getPopular(this.currentPage);
  }
}
