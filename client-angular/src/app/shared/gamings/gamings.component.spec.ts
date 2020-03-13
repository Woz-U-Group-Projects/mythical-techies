import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamingsComponent } from './gamings.component'
import { from } from 'rxjs';

describe('GamingsComponent', () => {
  let component: GamingsComponent;
  let fixture: ComponentFixture<GamingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
