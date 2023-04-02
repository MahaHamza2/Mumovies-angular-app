import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-show-tv',
  templateUrl: './show-tv.component.html',
  styleUrls: ['./show-tv.component.css'],
})
export class ShowTvComponent implements OnInit {
  showstv: any;
  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.getDetailTv(params.id));
  }

  getDetailTv(idTv: number) {
    this.movieservice.showTv(idTv).subscribe((res: any) => {
      this.showstv = res;
      console.log(res);
    });
  }
}
