import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-cardbasic',
  templateUrl: './cardbasic.component.html',
  styleUrls: ['./cardbasic.component.scss']
})
export class CardbasicComponent implements OnInit {
  @Input() data: Resource;

  constructor() { }

  ngOnInit() {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
