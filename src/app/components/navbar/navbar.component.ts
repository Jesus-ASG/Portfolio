import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  bg_color = '#000';

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    if (this.bg_color == "#000")
      this.bg_color = "#fff";
    else 
      this.bg_color = "#000";
  }

}
