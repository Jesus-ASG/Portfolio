import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show_technologies_class = 'd-none';
  show_technologies_label = 'Mostrar más';
  constructor() { }

  ngOnInit(): void {
  }

  seeMoreTechnologies() : void {
    if (this.show_technologies_class == 'd-none'){
      this.show_technologies_class = 'd-inline-block';
      this.show_technologies_label = 'Mostrar menos';
    }
    else{
      this.show_technologies_class = 'd-none';
      this.show_technologies_label = 'Mostrar más';
    }
  }

}
