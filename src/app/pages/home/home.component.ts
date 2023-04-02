import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  upComing: any[] = [];
  popular: any[] = [];
  popularTv: any[] = [];
  upComingSubscription: Subscription = new Subscription();
  popularSubscription: Subscription = new Subscription();
  popularTvSubscription: Subscription = new Subscription();

  constructor(private movieservice: MovieService) {}

  ngOnDestroy(): void {
    this.upComingSubscription.unsubscribe();
    this.popularSubscription.unsubscribe();
    this.popularTvSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllUpComing();
    this.getPopular();
    this.getPopularTv();
  }

  getAllUpComing() {
    this.upComingSubscription = this.movieservice
      .getUpComming('upcoming')
      .subscribe(({ results }: any) => {
        this.upComing = results;
      });
  }

  getPopular() {
    this.popularSubscription = this.movieservice
      .getUpComming('popular')
      .subscribe(({ results }: any) => {
        this.popular = results.splice(0, 18);
        console.log(this.popular);
      });
  }

  getPopularTv() {
    this.popularTvSubscription = this.movieservice
      .getPopularTvs()
      .subscribe(({ results }: any) => {
        this.popularTv = results.splice(0, 18);
      });
  }
}
