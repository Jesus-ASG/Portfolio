import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { project_sp } from '../../database/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = project_sp;

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }

  projectInfo(projet_id: number): void {
    this.router.navigate(['project-info', projet_id]);
  }

}
