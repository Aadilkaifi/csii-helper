import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsiiHelperComponent } from './csii-helper.component';

describe('CsiiHelperComponent', () => {
  let component: CsiiHelperComponent;
  let fixture: ComponentFixture<CsiiHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsiiHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsiiHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
