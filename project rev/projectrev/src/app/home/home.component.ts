import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trendingMovies: any;
  theatreMovies:any;
  popularMovies:any;


  constructor(private http: HttpClient, private router: Router) {}
ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getpopularMovies();
}
  getTrendingMovies() {
    this.http
    .get(' http://localhost:4500/trend')
    .subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies)
    });
  }
    getTheatreMovies(){
      this.http
        .get('http://localhost:4500/theatre')
        .subscribe((movies) => {
          this.theatreMovies = movies;
          console.log(this.theatreMovies)
        });
      }
      getpopularMovies(){
        this.http
          .get('http://localhost:4500/popmovie')
          .subscribe((movies) => {
            this.popularMovies = movies;
            console.log(this.popularMovies)
          });
        }
        goToMovie(type: string, id: string) {
          this.router.navigate(['movie', type, id]);
        }
}


