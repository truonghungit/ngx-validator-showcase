import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiLanguageComponent } from './multi-language.component';

const routes: Routes = [
  {
    path: '',
    component: MultiLanguageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiLanguageRoutingModule { }
