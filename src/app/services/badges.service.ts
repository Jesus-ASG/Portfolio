import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  badges: string[] = [
    "android_studio",
    "android",
    "angular",
    "azure",
    "bootstrap",
    "css3",
    "discord",
    "django",
    "docker",
    "firebase",
    "git",
    "github",
    "gmail",
    "gradle",
    "html5",
    "java",
    "javascript",
    "jwt",
    "laravel",
    "linkedin",
    "maven",
    "mongodb",
    "mysql",
    "opencv",
    "php",
    "postman",
    "python",
    "spring",
    "sqlite",
    "typescript",
    "ubuntu",
    "unity",
    "windows"
  ];

  constructor() { }

  getBadges(){
    return this.badges;
  }
}
