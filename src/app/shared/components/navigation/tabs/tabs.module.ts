import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WISETabGroup } from './tab-group/tab-group.component';
import { WISETab } from './tab/tab.component';

@NgModule({
  declarations: [WISETabGroup, WISETab],
  imports: [CommonModule],
  exports: [WISETabGroup, WISETab],
})
export class TabsModule {}
