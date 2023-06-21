import { Injectable } from '@angular/core';
import { project_sp } from '../database/database_projects';


@Injectable({
  providedIn: 'root'
})
export class DatabaseHandlerService {
  projects: any;
  constructor() {
    this.projects = project_sp;
  }

  getProjects() : any {
    return this.projects;
  }

  getProjectsNumber(): number{
    return this.projects.length;
  }


}
