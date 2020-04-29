import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmapComponent } from './ipmap.component';

describe('IpmapComponent', () => {
  let component: IpmapComponent;
  let fixture: ComponentFixture<IpmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
