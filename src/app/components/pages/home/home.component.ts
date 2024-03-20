import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  safeSrc: SafeResourceUrl;
  isVideoOverlayVisible: boolean = false;
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private renderer: Renderer2) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ztjfwecrY8E');
  }

  showVideoOverlay() {
    this.isVideoOverlayVisible = true;
  }

  hideVideoOverlay() {
    this.isVideoOverlayVisible = false;
  }
}
