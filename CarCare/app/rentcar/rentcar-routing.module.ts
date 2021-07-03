import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentcarPage } from './rentcar.page';

const routes: Routes = [
  {
    path: '',
    component: RentcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentcarPageRoutingModule {}
