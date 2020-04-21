import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardbasicComponent } from './cardbasic/cardbasic.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [CardbasicComponent, YoutubeplayerComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    YouTubePlayerModule
  ],
  exports: [
    CardbasicComponent,
    YoutubeplayerComponent
  ]
})
export class ComponentsModule { }
