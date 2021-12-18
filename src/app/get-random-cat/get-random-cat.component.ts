import { Component, OnInit } from '@angular/core';
import { BUTTONS, CARDS } from '../common/constants/text.const';
import { CatApiService } from '../common/service/cat-api.service';

@Component({
  selector: 'app-get-random-cat',
  templateUrl: './get-random-cat.component.html',
  styleUrls: ['./get-random-cat.component.scss']
})
export class GetRandomCatComponent implements OnInit {

  TEXTS = { ...BUTTONS, ...CARDS }

  imgLink: string | undefined;
  loaded = false;

  constructor(private catService: CatApiService) { }

  ngOnInit(): void {
    this.fetchRandomCat();
  }

  fetchRandomCat() {
    this.loaded = false;
    this.catService.getRandomCat().subscribe((cat: any) => {
      this.imgLink = cat[0].url;
      this.loaded = true;
    });
  }

}
