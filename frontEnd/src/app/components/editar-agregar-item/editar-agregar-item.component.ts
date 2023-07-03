import { CrudService } from 'src/app/services/crud.service';
import { Item } from './../../models/item';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-agregar-item',
  templateUrl: './editar-agregar-item.component.html',
  styleUrls: ['./editar-agregar-item.component.css'],
})
export class EditarAgregarItemComponent implements OnInit {
  itemForm: FormGroup;
  id: string | null;
  titulo: string = 'Crear Item';
  textoBoton: string = 'Guardar';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService: CrudService,
    private actRouter: ActivatedRoute
  ) {
    this.itemForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      cantidadDePersonas: ['', Validators.required],
      precio: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
    this.id = this.actRouter.snapshot.paramMap.get('id');
  }

  agregarItem() {
    const ITEM: Item = {
      descripcion: this.itemForm.get('descripcion')?.value,
      cantidadDePersonas: this.itemForm.get('cantidadDePersonas')?.value,
      precio: this.itemForm.get('precio')?.value,
      checkIn: this.itemForm.get('checkIn')?.value,
      checkOut: this.itemForm.get('checkOut')?.value,
    };
    if (this.id !== null) {
      this.crudService.editItem(this.id, ITEM).subscribe({
        next: (data) => {
          this.router.navigate(['/']);
        },
      });
    } else {
      this.crudService.postItem(ITEM).subscribe({
        next: (data) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.itemForm.reset();
        },
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      console.log(this.id);
      this.titulo = 'Editar Item';
      this.textoBoton = 'Editar';
      this.crudService.getItemById(this.id).subscribe({
        next: (data) => {
          this.itemForm.setValue({
            descripcion: data.descripcion,
            cantidadDePersonas: data.cantidadDePersonas,
            precio: data.precio,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }
}
