import {Component, Input, OnInit} from '@angular/core';
import {Video} from "../../../../models/Video";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: Video
  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;
  @Input()
  movieId:number

  constructor(private movieService:MovieService,private domSanitizer:DomSanitizer) {

  }

  ngOnInit(): void {
    this.movieService.getVideo(this.movieId).subscribe(value => {
      this.video=value
      this.videoUrl=this.video.results[0].key
      this.dangerousVideoUrl = 'https://www.youtube.com/embed/'+this.video
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl)
    })
  }

}
