import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/shared/models/resource.model';
import { resourceData } from '../resourceData';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resourceList: Resource[];

  constructor() { }

  ngOnInit() {
    this.resourceList = resourceData;
  }

}
