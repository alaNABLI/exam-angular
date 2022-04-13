import { Injectable } from '@angular/core';
import {Video} from "../model/video";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url: string = environment.url;
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<Video[]>(this.url)
  }

  addVideo(video:Video){
    return this.http.post(this.url,video )
  }

  updateVideo(video: Video){
    return this.http.put(this.url+video.id, video)
  }

  deleteVideo(ref: number){
    return this.http.delete(this.url+ref)
  }
}
