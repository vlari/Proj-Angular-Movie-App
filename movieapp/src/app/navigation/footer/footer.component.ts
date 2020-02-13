import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <span class="created-by">Created with ♥ by <b><a href="" target="_blank">X</a></b> 2020</span>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
