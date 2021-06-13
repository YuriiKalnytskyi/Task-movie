import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movie /movies-list/movies-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MoviesListCardComponent } from './components/movie /movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/movie /components/poster-preview/poster-preview.component';
import { PaginationComponent } from './components/movie /components/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarsRatingComponent } from './components/movie /components/stars-rating/stars-rating.component';
import { MoviesListCardDetailsComponent } from './components/movie /movies-list-card-details/movies-list-card-details.component';
import { GenresComponent } from './components/movie /components/genres/genres.component';
import { VideoComponent } from './components/movie /components/video/video.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";


let routers:Routes=[
   {path:'movie' , component:MoviesListComponent},
   {path:'movie/:id' , component:MoviesListCardDetailsComponent},
   {path:'user' , component:UserInfoComponent},

 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    PaginationComponent,
    StarsRatingComponent,
    MoviesListCardDetailsComponent,
    GenresComponent,
    VideoComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
