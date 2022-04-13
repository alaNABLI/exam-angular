import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {VideoFormComponent} from "./video-form/video-form.component";
import {VideoListComponent} from "./video-list/video-list.component";
const ROUTES: Routes=[
  {path:'', component: VideoListComponent},
  {path:'video', component: VideoListComponent},
  {path:'newVideo', component: VideoFormComponent},
  {path:'**', component: NotFoundComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
