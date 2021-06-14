import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadauthorComponent } from './readauthor.component';

describe('ReadauthorComponent', () => {
  let component: ReadauthorComponent;
  let fixture: ComponentFixture<ReadauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
