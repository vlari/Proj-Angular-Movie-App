import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.scss']
})
export class YoutubeplayerComponent implements OnInit {
  @Input() id: any;

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = environment.youtubeApiKey.frameApiUrl;
    document.body.appendChild(tag);
  }

}
