import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  template: `
  <div>
   <h1> Like / Dislike Component</h1>
  </div>
  <button [ngClass]="{'like-button': !isLiked, 'liked': isLiked}" (click)="likeCount()"> Like |<span [ngClass]="{'like-button': !isLiked, 'like': isLiked}">{{likeInitialCount}}</span> </button>
  <button [ngClass]="{'dislike-button': !isdisLiked, 'liked': isdisLiked}" (click)="dislikeCount()"> DisLike |<span [ngClass]="{'like-button': !isLiked, 'like': isLiked}">{{dislikeInitialCount}}</span> </button>

  `,
  styles: [`
  .like-button , .dislike-button{
    font-size : 1rem;
    padding: 5px 10px;
    color:#585858;
  }
  .liked, .disabled {
  font-weight:bold;
  color:#1565c0;
  }
  .likes-counter {
  font-weight:bold;
  color:#1565c0;
  }
  `],
})
export class LikeDislikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Demo-LikeDislike';
  public likeInitialCount = 100;
  public dislikeInitialCount = 25;
  isLiked:boolean = false;
  isdisLiked:boolean = false;

  likeCount(): void{
    if(this.likeInitialCount == 100){
      this.likeInitialCount++;
      this.isLiked = true;
    }
    else {
      this.likeInitialCount--;
      this.isLiked = false;
    }    
    }
    dislikeCount(): void{
      if(this.dislikeInitialCount == 25){
        this.dislikeInitialCount--;
        this.isdisLiked = true;
      }
      else {
        this.dislikeInitialCount++;
        this.isdisLiked = false;
      }    
      }

}
