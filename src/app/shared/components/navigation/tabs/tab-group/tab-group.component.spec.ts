import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WISETabGroup } from './WISETabGroup';

describe('WISETabGroup', () => {
  let component: WISETabGroup;
  let fixture: ComponentFixture<WISETabGroup>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WISETabGroup],
    });
    fixture = TestBed.createComponent(WISETabGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
