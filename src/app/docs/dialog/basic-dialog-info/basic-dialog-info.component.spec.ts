import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogInfoComponent } from './basic-dialog-info.component';

describe('BasicDialogInfoComponent', () => {
  let component: BasicDialogInfoComponent;
  let fixture: ComponentFixture<BasicDialogInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [BasicDialogInfoComponent]
});
    fixture = TestBed.createComponent(BasicDialogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
