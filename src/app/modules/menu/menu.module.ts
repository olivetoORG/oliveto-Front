import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';

@NgModule({
  declarations: [MenuComponent, MenuSectionComponent],
  imports: [CommonModule, MenuRoutingModule, SharedModule],
})
export class MenuModule {}
