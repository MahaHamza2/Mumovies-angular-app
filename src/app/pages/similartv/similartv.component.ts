import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-similartv',
  templateUrl: './similartv.component.html',
  styleUrls: ['./similartv.component.css'],
})
export class SimilartvComponent implements OnInit {
  simTvs: any[] = [];
  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.simTv(params.id);
    });
  }

  simTv(id: number) {
    this.movieservice.getSimilarTv(id).subscribe(({ results }: any) => {
      this.simTvs = results;
    });
  }
}
