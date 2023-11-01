import { Component, Input, OnInit } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
      
  }

  @Input() wishes: wishItem[] = [];

  toggleItem(e : wishItem){
    e.isComplete = !e.isComplete;
    console.log(e);
  }
}
