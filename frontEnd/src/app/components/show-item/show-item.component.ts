import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  CrudService
} from 'src/app/services/crud.service';
import {
  Item
} from 'src/app/models/item';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  listItem: Item[] = [];
  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
      this.obtenerItems();
  }
  obtenerItems() {
      this.crudService.getItems().subscribe({
          next: data => {
              console.log(data);
              this.listItem = data;
          },
          error: err => {
              console.log(err);
          }
      })
  } 
}