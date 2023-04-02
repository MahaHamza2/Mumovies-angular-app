import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3/movie';
  url: string = 'https://api.themoviedb.org/3/search';
  apiKey: string = '105d62827b7089b43c23c3eb717177ab';
  option: string = 'upcoming';

  constructor(private http: HttpClient) {}

  getUpComming(option: string, page: number = 1) {
    return this.http.get(
      `${this.baseUrl}/${option}?page=${page}&api_key=${this.apiKey}`
    );
  }

  showMovie(idMovie: number) {
    return this.http.get(`${this.baseUrl}/${idMovie}?api_key=${this.apiKey}`);
  }

  similarMovie(idMovie: number) {
    return this.http.get(
      `${this.baseUrl}/${idMovie}/similar?api_key=${this.apiKey}`
    );
  }

  actorMovie(idMovie: number) {
    return this.http.get(
      `${this.baseUrl}/${idMovie}/credits?api_key=${this.apiKey}`
    );
  }

  imageMovie(idMovie: number) {
    return this.http.get(
      `${this.baseUrl}/${idMovie}/images?api_key=${this.apiKey}`
    );
  }

  vedeoMovie(idMovie: number) {
    return this.http.get(
      `${this.baseUrl}/${idMovie}/videos?api_key=${this.apiKey}`
    );
  }

  searchMovie(qq: string, page: number = 1) {
    return this.http.get(
      `${this.url}/movie?page=${page}&api_key=${this.apiKey}&query=${qq}`
    );
  }

  categories() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
    );
  }

  getMovieByCate(categoryId: string, page: number = 1) {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${this.apiKey}&include_adult=false&with_genres=${categoryId}`
    );
  }

  getTv() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`
    );
  }

  getPopularTv() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`
    );
  }

  getPopularTvs() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`
    );
  }

  showTv(idTv: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}?api_key=${this.apiKey}`
    );
  }

  //  showTvSeasons(idTv: number , id: number){
  //   return this.http.get(`https://api.themoviedb.org/3/tv/${idTv}?api_key=${this.apiKey}`)
  //  }

  episodes(idTv: number, season: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}/season/${season}?api_key=${this.apiKey}`
    );
  }

  getSimilarTv(idTv: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}/similar?api_key=${this.apiKey}`
    );
  }

  getImageTv(idTv: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}/images?api_key=${this.apiKey}`
    );
  }

  getActorsTv(idTv: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}/credits?api_key=${this.apiKey}`
    );
  }

  getVedeosTv(idTv: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${idTv}/videos?api_key=${this.apiKey}`
    );
  }
}
