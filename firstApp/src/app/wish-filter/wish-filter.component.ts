import { Component ,OnInit,Output,EventEmitter} from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';


const filters =[
  (item:wishItem)=> item,
  (item:wishItem)=> !item.isComplete,
  (item:wishItem)=> item.isComplete
]
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
      this.changeFilter('0');
  }


  @Output() filter = new EventEmitter<any>();

  listFilter: any = '0';

  changeFilter(value: any){
    return this.filter.emit(filters[value]);
  }


  
/*
  // We can use this visibleItem1 to display selected and non selected items
  // By using (ngModelChange)="filterChange($event)" in select tag

  visibleItems1: wishItem[]= this.items;
  
  changeFilter(value:any){
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

}
