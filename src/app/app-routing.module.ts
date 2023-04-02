import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ShowMoviesComponent } from './pages/show-movies/show-movies.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ImagesComponent } from './pages/images/images.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { SimilartvComponent } from './pages/similartv/similartv.component';
import { ActorstvComponent } from './pages/actorstv/actorstv.component';
import { ImagestvComponent } from './pages/imagestv/imagestv.component';
import { VideostvComponent } from './pages/videostv/videostv.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'tv',
    component: TvComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'details/:id',
    component: ShowMoviesComponent,
    children: [
      {
        path: 'similar',
        component: SimilarComponent,
      },
      {
        path: 'actors',
        component: ActorsComponent,
      },
      {
        path: 'images',
        component: ImagesComponent,
      },
      {
        path: 'videos',
        component: VideosComponent,
      },
    ],
  },
  {
    path: 'tvshow/:id',
    component: ShowTvComponent,
    children: [
      {
        path: 'seasons',
        component: SeasonsComponent,
      },
      {
        path: 'similartv',
        component: SimilartvComponent,
      },
      {
        path: 'actorstv',
        component: ActorstvComponent,
      },
      {
        path: 'imagestv',
        component: ImagestvComponent,
      },
      {
        path: 'videostv',
        component: VideostvComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
