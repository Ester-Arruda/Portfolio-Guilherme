import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSection = 'home';

  constructor(private viewportScroller: ViewportScroller) {}
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll<HTMLElement>('section');
    const scrollPosition = window.scrollY + 100; // ajuste fino

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        this.currentSection = section.id;
      }
    });
  }
}
