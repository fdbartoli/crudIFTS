import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ShowItemComponent } from './components/show-item/show-item.component';

const routes: Routes = [
  { path: '', component: ShowItemComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
