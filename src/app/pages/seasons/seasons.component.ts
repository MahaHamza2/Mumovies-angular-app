import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent implements OnInit {
  seasons: any[] = [];

  episodes: any[] = [];

  idTv: number = 0;

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.idTv = params.id;
      this.getDetailseason(params.id);
    });
  }

  getDetailseason(idTv: number) {
    this.movieservice.showTv(idTv).subscribe((response: any) => {
      this.seasons = response?.seasons;
      console.log(response);
    });
  }

  getEpisodes(idSessions: number) {
    this.movieservice.episodes(this.idTv, idSessions).subscribe((res: any) => {
      this.episodes = res?.episodes;
      console.log(res);
    });
  }
}
