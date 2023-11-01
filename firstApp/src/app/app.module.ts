import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//This is imported here
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


/* AppComponent is imported 
  imports has all the dependencies which can be used in html templates
  providers are objects that can be injected to parts of the module
  bootstrap means entry point of module in this case AppComponent
*/
@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//this class is exported to get imported in other class like main.ts
export class AppModule { }
