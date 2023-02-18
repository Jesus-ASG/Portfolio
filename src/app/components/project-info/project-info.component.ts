import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { project_sp } from '../../database/project';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  project_id !: number;
  projects = project_sp;
  project: any;
  imageArray: string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly renderer: Renderer2,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.project_id = params['project_id'];
    });

    this.project = this.projects.find(e => e.id == this.project_id);
    if (!this.project) {
      this.router.navigate(['/404']);
      return;
    }
    this.renderer.setProperty(document.body, 'scrollTop', 0);

    for (let i of this.project.screenshots) {
      let path: string = this.project.img_folder + i;
      this.imageArray.push(path);
    }

    

  }

}
