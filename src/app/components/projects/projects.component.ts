import { Component, OnInit } from '@angular/core';
import { projects_sp } from './data';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = projects_sp;
  constructor() { }

  ngOnInit(): void {
  }

}
