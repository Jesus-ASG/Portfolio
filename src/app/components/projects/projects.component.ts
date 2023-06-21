import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { project_sp } from '../../database/database_projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      "id": 0,
      "priority": 0,
      "name": "",
      "thumbnail": "",
      "description": "",
      "badges": [""],
      "application_features": [
        ""
      ],
      "application_technical_features": [
        ""
      ],
      "screenshots": [
        "",
      ]
    }
  ];

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.projects = project_sp.sort((a, b) =>{ return a.priority - b.priority;});
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }
  /*
  projectInfo(projet_id: number): void {
    this.router.navigate(['project-info', projet_id]);
  }*/

}
