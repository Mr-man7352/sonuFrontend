import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromCityComponent } from './from-city/from-city.component';

const routes: Routes = [
  {
    path: '',
    component: FromCityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnewayCityRoutingModule {}
