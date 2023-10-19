import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Output,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WISEDialogConfig } from './dialogConfig';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'wise-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [CommonModule],
})
export class WISEDialog {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('dialogContent', { read: ViewContainerRef }) dialogContent!: ViewContainerRef;

  protected config: WISEDialogConfig = new WISEDialogConfig();
  protected contentComponentRef: ComponentRef<any> | undefined;
  protected dialogElement!: HTMLDialogElement;

  @Output() dialogClosed = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit(): void {
    this.dialogElement = this.dialog.nativeElement;
    this.dialogElement.addEventListener('close', () => {
      const callbackData = this.contentComponentRef?.instance.getCallbackData();
      this.dialogClosed.emit(callbackData);
    });
  }

  open<T>(component: Type<T>, config?: WISEDialogConfig) {
    this.config = { ...this.config, ...config };
    this.contentComponentRef = this.dialogContent.createComponent(component);
    this.contentComponentRef.setInput('data', this.config.data);
    if (!this.config.closeOnEscape) {
      this.dialogElement.addEventListener('cancel', this.preventClose);
    }
    this.dialog.nativeElement.showModal();
  }

  close(): void {
    this.dialog.nativeElement.close();
  }

  ngOnDestroy(): void {
    this.dialogContent.clear();
    this.dialogElement.removeEventListener('cancel', this.preventClose);
    this.dialog.nativeElement.close();
  }

  preventClose(event: Event): void {
    event.preventDefault();
  }
}
