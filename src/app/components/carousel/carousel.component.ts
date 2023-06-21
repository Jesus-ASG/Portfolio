import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent){
    
    switch (event.key){
      case 'ArrowLeft':
        this.prevImage(event);
        break;
      case 'ArrowRight':
        this.nextImage(event);
        break;
      case 'Escape':
        this.closeFullscreen();
        break;
    }
  }
  @Input() images !: string[];

  visibleImages !: string[];
  remainingImages !: number;
  fullscreenOpen : boolean = false;
  currentImage !: string;
  currentIndex !: number;
  totalImages !: number;

  constructor() { }

  ngOnInit() {
    this.updateVisibleImages();
    this.totalImages = this.images.length;
  }

  updateVisibleImages() {
    this.visibleImages = this.images.slice(0, 3);
    this.remainingImages = this.images.length - this.visibleImages.length;
  }

  openFullscreen(image: string) {
    this.currentImage = image;
    this.currentIndex = this.images.indexOf(image);
    this.fullscreenOpen = true;
  }

  closeFullscreen() {
    this.fullscreenOpen = false;
  }

  prevImage(event: Event) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.images[this.currentIndex];
    }
    else{
      this.currentIndex = this.images.length - 1;
      this.currentImage = this.images[this.currentIndex];
    }
    event.stopPropagation();
  }

  nextImage(event: Event) {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.currentImage = this.images[this.currentIndex];
    }
    else{
      this.currentIndex = 0;
      this.currentImage = this.images[this.currentIndex];
    }
    event.stopPropagation();
  }

}
