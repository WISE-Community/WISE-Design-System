import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WISEDialog } from './dialog.component';

describe('WISEDialog', () => {
  let component: WISEDialog;
  let fixture: ComponentFixture<WISEDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WISEDialog],
    });
    fixture = TestBed.createComponent(WISEDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
