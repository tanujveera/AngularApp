import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//This is imported here
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


/* AppComponent is imported 
  imports has all the dependencies which can be used in html templates
  providers are objects that can be injected to parts of the module
  bootstrap means entry point of module in this case AppComponent
*/
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//this class is exported to get imported in other class like main.ts
export class AppModule { }
