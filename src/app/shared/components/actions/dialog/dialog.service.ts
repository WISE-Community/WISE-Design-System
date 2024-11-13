import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  Type,
  createComponent,
} from '@angular/core';
import { WISEDialog } from './dialog.component';
import { WISEDialogConfig } from './dialogConfig';

/**
 * Service to open WISE modal dialogs.
 */
@Injectable({
  providedIn: 'root',
})
export class WISEDialogService {
  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
  ) {}

  DIALOG_TITLE_PREFIX: string = 'wise-dialog-title-';
  /**
   * A list of all open dialogs
   */
  dialogRefs: ComponentRef<WISEDialog>[] = [];

  /**
   * Opens a dialog with the specified component and configuration.
   * @param {Type<T>} component The component to display in the dialog.
   * @param {WISEDialogConfig} dialogConfig Configuration options for the dialog.
   * @returns {ComponentRef<WISEDialog>} Reference to the newly opened dialog component.
   */
  open<T>(component: Type<T>, dialogConfig?: WISEDialogConfig): ComponentRef<WISEDialog> {
    const dialogRef = createComponent(WISEDialog, {
      environmentInjector: this.injector as EnvironmentInjector,
    });
    this.appRef.attachView(dialogRef.hostView);
    const domElem = (dialogRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    dialogRef.changeDetectorRef.detectChanges();
    dialogRef.instance.open(component, this.initializeDialogConfig(dialogConfig));
    this.dialogRefs.push(dialogRef);
    dialogRef.instance.dialogClosed.subscribe(() => {
      this.appRef.detachView(dialogRef.hostView);
      this.dialogRefs = this.dialogRefs.filter((ref) => ref !== dialogRef);
      dialogRef.destroy();
    });
    return dialogRef;
  }

  private initializeDialogConfig(dialogConfig: WISEDialogConfig | undefined) {
    let config: WISEDialogConfig = new WISEDialogConfig();
    config = { ...config, ...dialogConfig };
    if (!config.ariaLabelledBy && !config.ariaLabel) {
      config.ariaLabelledBy = this.DIALOG_TITLE_PREFIX + this.dialogRefs.length;
    }
    return config;
  }

  /**
   * Closes all open dialogs.
   */
  closeAll(): void {
    this.dialogRefs.forEach((dialogRef) => {
      dialogRef.instance.dialog.nativeElement.close();
    });
  }
}
