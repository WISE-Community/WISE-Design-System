import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WISEDialogActions, WISEDialogBody, WISEDialogTitle } from './dialog-content-components';

@NgModule({
  declarations: [],
  imports: [CommonModule, WISEDialogActions, WISEDialogBody, WISEDialogTitle],
  exports: [WISEDialogActions, WISEDialogBody, WISEDialogTitle],
})
export class WISEDialogContentModule {}
