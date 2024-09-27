import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WISETable } from './table.component';

describe('WISETable', () => {
  let component: WISETable;
  let fixture: ComponentFixture<WISETable>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [WISETable],
});
    fixture = TestBed.createComponent(WISETable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
