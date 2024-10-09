import { Component, ComponentRef, OnInit } from '@angular/core';
import { WISEButton } from 'src/app/shared/components/actions/button/button.component';
import { WISEDialogContent } from 'src/app/shared/components/actions/dialog/dialog-content-components';
import { WISEDialogService } from 'src/app/shared/components/actions/dialog/dialog.service';
import { WISEDialogConfig } from 'src/app/shared/components/actions/dialog/dialogConfig';
import {
  WISEDialogActions,
  WISEDialogBody,
  WISEDialogTitle,
} from '../../../shared/components/actions/dialog/dialog-content-components';
import { WISEDialog } from 'src/app/shared/components/actions/dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'basic-dialog',
  imports: [FormsModule, WISEButton],
  templateUrl: './basic-dialog.component.html',
})
export class BasicDialog {
  constructor(private dialogService: WISEDialogService) {}

  private dialogRef: ComponentRef<WISEDialog> | undefined;
  private name: string = '';
  private color: string = '';
  private width: string = 'sm';

  openDialog(width: 'sm' | 'md' | 'lg' | 'xl' = 'sm'): void {
    const dialogConfig: WISEDialogConfig = {
      data: {
        name: this.name,
        color: this.color,
      },
      closeOnBackdropClick: true,
      closeOnEscape: true,
      width: width,
    };
    this.dialogRef = this.dialogService.open(BasicDialogContent, dialogConfig);
    this.dialogRef.instance.dialogClosed.subscribe((result: any) => {
      if (result) {
        this.color = result.color;
        this.width = width;
      }
    });

    // setTimeout(() => {
    //   this.dialogRef?.instance.close();
    // }, 1000);
  }
}

@Component({
  standalone: true,
  imports: [FormsModule, WISEButton, WISEDialogActions, WISEDialogBody, WISEDialogTitle],
  templateUrl: './basic-dialog-content.html',
})
export class BasicDialogContent extends WISEDialogContent implements OnInit {
  constructor() {
    super();
  }

  protected color: string = '';

  ngOnInit(): void {
    this.color = this.data.color;
  }

  submit(): void {
    this.callbackData = { color: `${this.color}` };
    this.dialog.close();
  }
}
