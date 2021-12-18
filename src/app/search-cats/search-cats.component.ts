import { Component } from '@angular/core';
import { BUTTONS, CARDS, ERROR } from '../common/constants/text.const';
import { CatBreed } from '../common/model/cat.model';
import { CatApiService } from '../common/service/cat-api.service';

@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent {

  TEXTS = { ...BUTTONS, ...CARDS, ...ERROR }

  IMAGE_URL = 'https://cdn2.thecatapi.com/images/';
  IMAGE_EXTENSION = '.jpg';
  LIMIT = 6;

  catBreed = '';
  catBreedList: CatBreed[] = [];
  searchTriggered = false;

  constructor(private catService: CatApiService) { }

  search() {
    this.catBreedList = [];

    this.catService.searchCatByBreed(this.catBreed).subscribe((res: any) => {
      if (res.length > 0) {
        this.pushResultsToList(res);
        console.log(this.catBreedList);
      } else {
        console.log('No results!');
      }

      this.searchTriggered = true;
    });
  }

  private pushResultsToList(res: any[]) {
    let limitedResults = res.slice(0, this.LIMIT);

    limitedResults.forEach(item => {
      const catBreed: CatBreed = {
        name: item.name,
        alt_names: item.alt_names,
        description: item.description,
        life_span: item.life_span,
        temperament: item.temperament,
        image_url: this.IMAGE_URL + item.reference_image_id + this.IMAGE_EXTENSION,
      }

      this.catBreedList.push(catBreed);
    });
  }

}
