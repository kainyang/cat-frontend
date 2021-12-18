import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRandomCatComponent } from './get-random-cat/get-random-cat.component';
import { HomeComponent } from './home/home.component';
import { SearchCatsComponent } from './search-cats/search-cats.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'random-cat',
        component: GetRandomCatComponent
      },
      {
        path: 'search-cats',
        component: SearchCatsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
