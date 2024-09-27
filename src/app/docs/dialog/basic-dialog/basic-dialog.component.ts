import { Component, OnInit } from '@angular/core';
import { WISEButton } from 'src/app/shared/components/actions/button/button.component';
import { WISEDialogContent } from 'src/app/shared/components/actions/dialog/dialog-content-components';
import { WISEDialogService } from 'src/app/shared/components/actions/dialog/dialog.service';
import { WISEDialogConfig } from 'src/app/shared/components/actions/dialog/dialogConfig';
import {
  WISEDialogActions,
  WISEDialogBody,
  WISEDialogTitle,
} from '../../../shared/components/actions/dialog/dialog-content-components';

@Component({
  standalone: true,
  selector: 'basic-dialog',
  imports: [WISEButton],
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.css'],
})
export class BasicDialog {
  constructor(private dialogService: WISEDialogService) {}

  openDialog(width: 'sm' | 'md' | 'lg' | 'xl' = 'sm'): void {
    const dialogConfig: WISEDialogConfig = {
      data: {
        title: 'Hello World!',
      },
      closeOnBackdropClick: true,
      closeOnEscape: true,
      width: width,
    };
    const dialog = this.dialogService.open(BasicDialogContent, dialogConfig);
    dialog.instance.dialogClosed.subscribe((result: any) => {
      console.log(`${result.text} from ${width} dialog`);
    });

    // setTimeout(() => {
    //   dialog.instance.close();
    // }, 1000);
  }
}

@Component({
  standalone: true,
  imports: [WISEButton, WISEDialogActions, WISEDialogBody, WISEDialogTitle],
  templateUrl: './basic-dialog-content.html',
})
export class BasicDialogContent extends WISEDialogContent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.callbackData = { text: `${this.data.title}` };
  }
}
