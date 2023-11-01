import { Component,OnInit ,Output,EventEmitter} from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
      
  }

  @Output() addWish = new EventEmitter<wishItem>();

  newWishText: any ="";
  

  addNewWish(){
    // add wish to items array
    //clear text box
    // this.items.push(new wishItem(this.newWishText));
    this.addWish.emit(new wishItem(this.newWishText))
    this.newWishText="";
  }
}
