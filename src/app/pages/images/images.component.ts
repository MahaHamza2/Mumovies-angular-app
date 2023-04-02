import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: any[] = [];
  movie: any[] = [];

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.getImage(params.id);
    });
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

  getImage(id: number) {
    this.movieservice.imageMovie(id).subscribe(({ backdrops }: any) => {
      this.images = backdrops;
    });
  }
}
