import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BasicDialog } from './basic-dialog/basic-dialog.component';

type StoryDialog = BasicDialog;

export default {
  title: 'Components/Actions/Dialog',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BasicDialog, CommonModule],
    }),
  ],
} as Meta<StoryDialog>;

export const Dialog: StoryObj<StoryDialog> = {
  render: () => ({
    template: `
      <basic-dialog></basic-dialog>
    `,
  }),
};
