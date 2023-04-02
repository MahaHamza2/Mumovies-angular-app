import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-imagestv',
  templateUrl: './imagestv.component.html',
  styleUrls: ['./imagestv.component.css'],
})
export class ImagestvComponent implements OnInit {
  imagesTv: any[] = [];

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.getImageTv(params.id);
    });
  }

  getImageTv(id: number) {
    this.movieservice.getImageTv(id).subscribe((res: any) => {
      this.imagesTv = res?.backdrops;
    });
  }
}
