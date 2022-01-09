import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import { MatButtonModule } from '@angular/material/button';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
