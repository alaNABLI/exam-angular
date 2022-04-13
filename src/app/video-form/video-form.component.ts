import { Component, OnInit } from '@angular/core';
import {Video} from "../model/video";
import {VideoService} from "../services/video.service";

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {

  video: Video;

  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.video = new Video();
  }

  save() {
    this.video.nbeShared=0;
    this.videoService.addVideo(this.video).subscribe();
  }

}
