import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides: string[];
  i: number;
  safeSrc: SafeResourceUrl;
  isVideoOverlayVisible: boolean = false;
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private renderer: Renderer2) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ztjfwecrY8E');
    this.i = 0;
    this.slides = [
      './assets/img/gameplay1.jpeg',
      './assets/img/gameplay2.png'
    ]
  }


  getPrev() {
    this.i = this.i === 0 ? this.slides.length - 1 : this.i - 1;
  }
  
  getNext() {
    this.i = (this.i + 1) % this.slides.length;
  }

  showVideoOverlay() {
    this.isVideoOverlayVisible = true;
  }

  hideVideoOverlay() {
    this.isVideoOverlayVisible = false;
  }
}
