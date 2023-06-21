import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { BadgesService } from 'src/app/services/badges.service';
import { DatabaseHandlerService } from 'src/app/services/database-handler.service';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.scss']
})
export class UploadProjectComponent implements OnInit {
  defaultPriority: number = 50;
  badges !: string[];
  selectedBadges: any = {};
  jsonResponse!: string;
  screenshotsFiles!: FileList;
  screenshotsPreviews: any = [];

  constructor(
    private badgesService: BadgesService,
    private databaseHandler: DatabaseHandlerService
    ) { }

  ngOnInit(): void {
    this.badges = this.badgesService.getBadges();
  }

  handleScreenshotsFiles(files: any): void{
    if (files == null)
      return;  
    this.screenshotsFiles = files.files;

    this.screenshotsPreviews = [];

    for (let i = 0; i < this.screenshotsFiles.length; i++) {
      const reader = new FileReader();
      let obj:any = {};
      reader.onload = (event: any) => {

        //this.screenshotsPreviews.push(event.target.result);
        obj.src = event.target.result;
      };
      reader.readAsDataURL(this.screenshotsFiles[i]);
      obj.name = this.screenshotsFiles[i].name;
      this.screenshotsPreviews.push(obj);
    }
  }

  upload(form: any): void{
    let project:Project = new Project();
    
    let assetsPath = 'assets/data_projects/' + form.folder_name + '/';

    // Screenshots
    let screenshots :string[] = [];
    for(let s of this.screenshotsPreviews)
      screenshots.push( assetsPath + s.name);

    const application_features = form.application_features.split("\n");
    const application_technical_features = form.application_technical_features.split("\n");

    project.id = this.databaseHandler.getProjectsNumber() + 1;;
    project.priority = form.priority;
    project.name = form.name;
    project.thumbnail = assetsPath + form.thumbnail;
    project.screenshots = screenshots;
    project.description = form.description;
    project.badges = Object.keys(this.selectedBadges);
    project.application_features = application_features;
    project.application_technical_features = application_technical_features;

    console.log(project);
    let projectString: string = JSON.stringify(project);
    console.log(projectString)
    this.jsonResponse = projectString;

  }

}
