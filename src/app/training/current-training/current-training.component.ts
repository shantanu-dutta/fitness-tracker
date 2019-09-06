import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor() { }

  ngOnInit() {
    this.timer = window.setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) window.clearInterval(this.timer);
    }, 1000);
  }

  onStop() {
    window.clearInterval(this.timer);
  }

}
