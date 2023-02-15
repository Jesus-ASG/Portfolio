import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { project_sp } from '../../database/project';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  project_id !: number;
  projects = project_sp;
  project : any;
  imageArray:string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.project_id = params['project_id'];
    });

    this.project = this.projects.find(e => e.id == this.project_id);
    if (!this.project){
      this.router.navigate(['/404']);
    }
    else{
      for (let i of this.project.screenshots){
        let path:string = this.project.img_folder + i;
        this.imageArray.push(path);
      }
      
    }
    
  }

}
