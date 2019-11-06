import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `
  <h1> Like button</h1>
  <button [ngClass]="{'like-button': !isLiked, 'like': isLiked}" 
  (click)="clickCount()"> Like |<span [ngClass]="{'like-button': !isLiked, 'like': isLiked}">
  {{initialCount}}</span> </button>
  `,
  styles: [`
  .like-button {
    font-size : 1rem;
    padding: 5px 10px;
    color:#585858;
  }
  .like {
  font-weight:bold;
  color:#1565c0;
  }
  .likes-counter {
    font-weight:bold;
    color:#1565c0;
    }
  `],
})
export class LikeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Demo-LikeDislike';
  public initialCount = 100;
  isLiked:boolean = false;

  clickCount(): void{
    if(this.initialCount == 100){
      this.initialCount++;
      this.isLiked = true;
    }
    else if(this.initialCount!= 0) {
      this.initialCount--;
      this.isLiked = false;
    }    
    }
}
