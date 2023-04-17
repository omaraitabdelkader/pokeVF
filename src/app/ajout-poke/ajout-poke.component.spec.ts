import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPokeComponent } from './ajout-poke.component';

describe('AjoutPokeComponent', () => {
  let component: AjoutPokeComponent;
  let fixture: ComponentFixture<AjoutPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
