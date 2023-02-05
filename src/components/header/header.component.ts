import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title!: 'Social Media Dashboard';
  darkMode!: true;

  constructor(){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if(mq) {
      this.toggleDark();
    }
  }

  darkModeActive(selected: any) {
    if(selected){
      this.toggleDark();
    } else { 
      this.toggleLight();
    }
  }

  toggleDark() {
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
  }
  
  toggleLight() {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
}
