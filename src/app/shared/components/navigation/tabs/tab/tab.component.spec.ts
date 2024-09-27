import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WISETab } from './tab.component';

describe('WISETab', () => {
  let component: WISETab;
  let fixture: ComponentFixture<WISETab>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [WISETab],
});
    fixture = TestBed.createComponent(WISETab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
