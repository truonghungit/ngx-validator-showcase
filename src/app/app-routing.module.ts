import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleFormComponent,
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
