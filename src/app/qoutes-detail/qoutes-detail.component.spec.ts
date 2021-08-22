import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesDetailComponent } from './qoutes-detail.component';

describe('QoutesDetailComponent', () => {
  let component: QoutesDetailComponent;
  let fixture: ComponentFixture<QoutesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
