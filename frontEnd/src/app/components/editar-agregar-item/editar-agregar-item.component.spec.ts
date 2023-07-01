import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgregarItemComponent } from './editar-agregar-item.component';

describe('EditarAgregarItemComponent', () => {
  let component: EditarAgregarItemComponent;
  let fixture: ComponentFixture<EditarAgregarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAgregarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAgregarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
