import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css'],
})
export class SimilarComponent implements OnInit {
  simiMovie: any[] = [];
  simTvs: any[] = [];

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.simMovie(params.id);
    });
  }

  simMovie(id: number) {
    this.movieservice.similarMovie(id).subscribe(({ results }: any) => {
      this.simiMovie = results.splice(0, 18);
    });
  }
}
