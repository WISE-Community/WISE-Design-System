import { Component, Input } from '@angular/core';
import { WISEDialogContentModule } from './dialog-content.module';

/**
 * Title of a dialog. Stays fixed to the top of the dialog when scrolling.
 */
@Component({
  standalone: true,
  selector: 'wise-dialog-title, [wise-dialog-title]',
  host: {
    class: 'p-4 bg-base-100',
  },
  template: `
    <h2 class="text-lg m-0">
      <ng-content></ng-content>
    </h2>
  `,
})
export class WISEDialogTitle {}

/**
 * Scrollable container for dialog content.
 */
@Component({
  standalone: true,
  selector: 'wise-dialog-body, [wise-dialog-body]',
  host: {
    class: 'px-4 flex-1 overflow-auto scroll-shadow-v',
  },
  template: `<ng-content></ng-content>`,
})
export class WISEDialogBody {}

/**
 * Container for the bottom actions in a dialog. Stays fixed to the bottom when scrolling.
 */
@Component({
  standalone: true,
  selector: 'wise-dialog-action, [wise-dialog-action]',
  host: {
    class: 'modal-action gap-2 mt-0 p-4 bg-base-100',
  },
  template: `<ng-content></ng-content>`,
})
export class WISEDialogActions {}

/**
 * Content of a dialog. Can contain any or all of the dialog title, body, and action component.
 * Should be extended to provide custom content for each dialog instance.
 */
@Component({
  standalone: true,
  selector: 'wise-dialog-content',
  host: {
    class: 'flex flex-col max-h-inherit',
  },
  template: '',
  imports: [],
})
export class WISEDialogContent {
  @Input() data: any;

  callbackData: any;

  constructor() {}

  getCallbackData(): any {
    return this.callbackData;
  }
}
