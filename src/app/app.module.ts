import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShowMoviesComponent } from './pages/show-movies/show-movies.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideostvComponent } from './pages/videostv/videostv.component';
import { ImagesComponent } from './pages/images/images.component';
import { ImagestvComponent } from './pages/imagestv/imagestv.component';
import { ActorstvComponent } from './pages/actorstv/actorstv.component';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { SimilartvComponent } from './pages/similartv/similartv.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { SpinerComponent } from './components/spiner/spiner.component';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    MoviesComponent,
    TvComponent,
    CardComponent,
    SliderComponent,
    ShowMoviesComponent,
    SimilarComponent,
    ActorsComponent,
    VideosComponent,
    VideostvComponent,
    ImagesComponent,
    ImagestvComponent,
    ActorstvComponent,
    ShowTvComponent,
    SimilartvComponent,
    SeasonsComponent,
    EpisodesComponent,
    SpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
