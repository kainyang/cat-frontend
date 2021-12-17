import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRandomCatComponent } from './get-random-cat/get-random-cat.component';
import { HomeComponent } from './home/home.component';
import { SearchCatsComponent } from './search-cats/search-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    GetRandomCatComponent,
    HomeComponent,
    SearchCatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
