import { Component,ElementRef,Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private renderer:Renderer2) { }

  showTrailer() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bH1lHCirCGI');
  }

}
