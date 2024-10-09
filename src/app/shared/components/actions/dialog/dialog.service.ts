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
  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
  ) {}

  private dialogRefs: ComponentRef<WISEDialog>[] = [];

  open<T>(component: Type<T>, dialogConfig?: WISEDialogConfig): ComponentRef<WISEDialog> {
    const dialogRef = createComponent(WISEDialog, {
      environmentInjector: this.injector as EnvironmentInjector,
    });
    this.appRef.attachView(dialogRef.hostView);
    const domElem = (dialogRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    dialogRef.changeDetectorRef.detectChanges();
    dialogRef.instance.open(component, dialogConfig);
    this.dialogRefs.push(dialogRef);
    dialogRef.instance.dialogClosed.subscribe(() => {
      this.appRef.detachView(dialogRef.hostView);
      this.dialogRefs = this.dialogRefs.filter((ref) => ref !== dialogRef);
      dialogRef.destroy();
    });
    return dialogRef;
  }

  closeAll(): void {
    this.dialogRefs.forEach((dialogRef) => {
      dialogRef.instance.dialog.nativeElement.close();
    });
  }
}
