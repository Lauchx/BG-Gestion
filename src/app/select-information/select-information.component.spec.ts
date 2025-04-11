import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInformationComponent } from './select-information.component';

describe('SelectInformationComponent', () => {
  let component: SelectInformationComponent;
  let fixture: ComponentFixture<SelectInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
