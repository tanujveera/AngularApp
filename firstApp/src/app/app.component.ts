import { Component } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';

const filters =[
  (item:wishItem)=> item,
  (item:wishItem)=> !item.isComplete,
  (item:wishItem)=> item.isComplete
]

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
  title = 'firstApp';

  newWishText: any ="";

  listFilter: any = '0';


  get visibleItems() : wishItem[]{
    return this.items.filter(filters[this.listFilter]);
  };

  
/*
  // We can use this visibleItem1 to display selected and non selected items
  // By using (ngModelChange)="filterChange($event)" in select tag

  visibleItems1: wishItem[]= this.items;
  
  filterChange(value:any){
    if(value=='0'){
      this.visibleItems1=this.items;
    }
    else if(value=='1'){
      this.visibleItems1=this.items.filter(item=>!item.isComplete);
    }
    else{
      this.visibleItems1=this.items.filter(item=>item.isComplete);
    }
  }
  */

  addWish(){
    // add wish to items array
    //clear text box
    this.items.push(new wishItem(this.newWishText));
    this.newWishText="";
  }

  toggleItem(e : wishItem){
    e.isComplete = !e.isComplete;
    console.log(e);
  }
}
