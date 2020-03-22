import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesdataService } from 'src/app/core/data/moviesdata.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesResponse } from 'src/app/shared/models/movies-response.model';
import { HttpMoviesError } from 'src/app/shared/models/http-movies-error.model';
// import { GenreOptions } from 'src/app/shared/models/genre-options.enum';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  movie: any;
  genres: any;

  constructor(private route: ActivatedRoute,
              private movieDataService: MoviesdataService) { }

  ngOnInit() {
    let resolvedMovie: any | HttpMoviesError = this.route.snapshot
      .data["resolvedMovie"];

    if (resolvedMovie instanceof HttpMoviesError) {
      console.log('Error');
    } else {
      this.movie = resolvedMovie.data.movie;
    }
    
    this.genres = [];
    // this.genres = this.movie.genres.map(o => {
    //   let option = GenreOptions.find(g => g.name === o.toLowerCase());
      
    //   if(option){
    //     this.genres.push(option);
    //     console.log(this.genres);
    //   }
    // })
  }

  

}