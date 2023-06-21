import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseHandlerService } from 'src/app/services/database-handler.service';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 projects: Project[] = [];

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2,
    private databaseHandler: DatabaseHandlerService
  ) { }

  ngOnInit(): void {
    this.projects = this.databaseHandler.getProjects();

    this.projects = this.projects.sort((a, b) =>{ return b.priority - a.priority;});
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }
  /*
  projectInfo(projet_id: number): void {
    this.router.navigate(['project-info', projet_id]);
  }*/

}
