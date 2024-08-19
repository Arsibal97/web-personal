import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoFotoComponent } from './dialogo-foto.component';

describe('DialogoFotoComponent', () => {
  let component: DialogoFotoComponent;
  let fixture: ComponentFixture<DialogoFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
