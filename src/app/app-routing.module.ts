import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
