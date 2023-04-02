import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-videostv',
  templateUrl: './videostv.component.html',
  styleUrls: ['./videostv.component.css'],
})
export class VideostvComponent implements OnInit {
  vedeos: any[] = [];

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.getVideos(params.id);
    });
  }

  getVideos(id: number) {
    this.movieservice.getVedeosTv(id).subscribe((res: any) => {
      this.vedeos = res?.results;
      console.log(res);
    });
  }

  getVedeo(url: any) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
