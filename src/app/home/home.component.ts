import { Component, OnInit } from '@angular/core';
import { HEADER, NAV_BAR } from '../common/constants/text.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  TEXTS = {...NAV_BAR, ...HEADER};

  constructor() { }

  ngOnInit(): void {
  }

}
