import { Component } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//this class is exported to get imported in other class like app.module.ts
export class AppComponent {
 
  items: wishItem[] =[
    new wishItem('Angular'),
    new wishItem('coffee', true),
    new wishItem("Learn angular")
  ];

  filter: any = () => {};

    // If you want to use [(ngModel)] ="listFilter"
  // get visibleItems() : wishItem[]{
  //   return this.items.filter(this.wish);
  // };
 
}
