import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screenWidth: number;

  constructor() {
    // set screen width on page load
    this.setScreenWidth(window.innerWidth);
    // set screen width on window resizes
    window.onresize = () => this.setScreenWidth(window.innerWidth);
  }

  private setScreenWidth(width: number) {
    this.screenWidth = width;
  }
}
