import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  actors: any[] = [];
  movie: any[] = [];
  imageUrl =
    'https://cdn.discordapp.com/attachments/426088981948530700/1090229216701861928/default.jpg ';

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) =>
      this.getActors(params.id)
    );
    this.route.parent?.params.subscribe((params: any) => {
      this.getMovieName(params.id);
    });
  }

  getMovieName(id: number) {
    this.movieservice.showMovie(id).subscribe(({ title }: any) => {
      this.movie = title;

      console.log('movie', title);
    });
  }

  getActors(id: number) {
    this.movieservice.actorMovie(id).subscribe(({ cast }: any) => {
      this.actors = cast;
    });
  }
}
