import { Component, ComponentRef, OnInit } from '@angular/core';
import { WISEButton } from 'src/app/shared/components/actions/button/button.component';
import { WISEDialogService } from 'src/app/shared/components/actions/dialog/dialog.service';
import { WISEDialogConfig } from 'src/app/shared/components/actions/dialog/dialogConfig';
import {
  WISEDialogActions,
  WISEDialogBody,
  WISEDialogContent,
  WISEDialogTitle,
} from '../../../shared/components/actions/dialog/dialog-content-components';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'basic-dialog',
  imports: [FormsModule, WISEButton],
  templateUrl: './basic-dialog.component.html',
})
export class BasicDialog {
  constructor(private dialogService: WISEDialogService) {}

  private name: string = '';
  private color: string = '';
  private width: string = 'sm';

  openDialog(width: 'sm' | 'md' | 'lg' | 'xl' = 'sm'): void {
    const dialogConfig: WISEDialogConfig = {
      data: {
        name: this.name,
        color: this.color,
      },
      width: width,
    };
    let dialogRef = this.dialogService.open(BasicDialogContent, dialogConfig);
    dialogRef.instance.dialogClosed.subscribe((result: any) => {
      if (result) {
        this.color = result.color;
        this.width = width;
      }
    });
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
    this.callbackData = { color: this.color };
    this.dialog.close();
  }
}
