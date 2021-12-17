import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRandomCatComponent } from './get-random-cat.component';

describe('GetRandomCatComponent', () => {
  let component: GetRandomCatComponent;
  let fixture: ComponentFixture<GetRandomCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRandomCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRandomCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
