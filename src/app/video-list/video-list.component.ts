import { Component, OnInit } from '@angular/core';
import {Video} from "../model/video";
import {VideoService} from "../services/video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  searchWord: string;
  list: Video[];

  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.getList().subscribe(
      (data:Video[])=> this.list=data
    );
  }

  searchVideo() {
    if (!(this.searchWord == "")){
      let param = this.searchWord ;
      let that = this;
      this.list.forEach(function (video){
        let key = that.list.indexOf(video);
        if (video.description.indexOf(param) === -1){
          console.log(key)
          that.list.splice(key, 1)
        }
      });
    } else {
      this.videoService.getList().subscribe(
        (data:Video[])=> this.list=data
      );
    }

  }

  incrementShare(video: Video): void{
    let i = this.list.indexOf(video);
    if(i!=-1){
      this.list[i].nbeShared++;
    }
    this.videoService.updateVideo(video).subscribe();
  }
  delete(id: number, i: number): void {

    this.videoService.deleteVideo(id).subscribe(
      () => this.list.splice(i, 1)
    );

  }

}
