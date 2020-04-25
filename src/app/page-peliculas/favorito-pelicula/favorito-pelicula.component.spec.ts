import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoPeliculaComponent } from './favorito-pelicula.component';

describe('FavoritoPeliculaComponent', () => {
  let component: FavoritoPeliculaComponent;
  let fixture: ComponentFixture<FavoritoPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
