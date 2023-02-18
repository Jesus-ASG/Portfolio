import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(option: number): void{
    let url = 'assets/files/';
    if (option == 0)
      url += 'english_cv.pdf';
    else if (option == 1)
      url += 'spanish_cv.pdf';
    else return;

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', 'CV Jesus Alejandro Serrano Graciano.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
