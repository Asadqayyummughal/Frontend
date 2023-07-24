import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdialogDemoComponent } from './matdialog-demo.component';

describe('MatdialogDemoComponent', () => {
  let component: MatdialogDemoComponent;
  let fixture: ComponentFixture<MatdialogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdialogDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatdialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
