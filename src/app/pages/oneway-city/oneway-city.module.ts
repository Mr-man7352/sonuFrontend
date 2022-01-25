import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnewayCityRoutingModule } from './oneway-city-routing.module';
import { FromCityComponent } from './from-city/from-city.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FromCityComponent],
  imports: [
    CommonModule,
    OnewayCityRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class OnewayCityModule {}
