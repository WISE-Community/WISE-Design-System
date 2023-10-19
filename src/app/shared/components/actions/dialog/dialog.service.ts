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

@Injectable({
  providedIn: 'root',
})
export class WISEDialogService {
  constructor(private injector: Injector, private appRef: ApplicationRef) {}

  dialogRef: ComponentRef<WISEDialog> | undefined;

  // open<T>(component: Type<T>, dialogConfig?: WISEDialogConfig): Promise<any> {
  open<T>(component: Type<T>, dialogConfig?: WISEDialogConfig): ComponentRef<WISEDialog> {
    const dialogRef = createComponent(WISEDialog, {
      environmentInjector: this.injector as EnvironmentInjector,
    });
    this.appRef.attachView(dialogRef.hostView);
    const domElem = (dialogRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    dialogRef.changeDetectorRef.detectChanges();
    dialogRef.instance.open(component, dialogConfig);

    // return new Promise((resolve) => {
    // dialogRef.instance.dialogClosed.subscribe((result: any) => {
    dialogRef.instance.dialogClosed.subscribe(() => {
      this.appRef.detachView(dialogRef.hostView);
      dialogRef.destroy();
      // resolve(result);
    });
    // });
    this.dialogRef = dialogRef;
    return dialogRef;
  }

  close(): void {
    this.dialogRef?.instance.dialog.nativeElement.close();
  }
}
