import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project_sp } from '../../database/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects = project_sp;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  projectInfo(projet_id: number): void{
    this.router.navigate(['project-info', projet_id]);
  }

}
