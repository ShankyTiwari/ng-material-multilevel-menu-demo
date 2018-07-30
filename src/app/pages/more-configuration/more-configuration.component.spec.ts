import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreConfigurationComponent } from './more-configuration.component';

describe('MoreConfigurationComponent', () => {
  let component: MoreConfigurationComponent;
  let fixture: ComponentFixture<MoreConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
