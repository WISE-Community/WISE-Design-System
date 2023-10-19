import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// import { WISEDialogService } from '../../shared/components/actions/dialog/dialog.service';
import { BasicDialog } from './basic-dialog/basic-dialog.component';

// function dialogServiceFactory(dialogService: WISEDialogService) {
//   return () => dialogService;
// }

const meta: Meta = {
  title: 'Components/Actions/Dialog',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BasicDialog, CommonModule],
    }),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Dialog: Story = {
  render: () => ({
    template: `
      <basic-dialog></basic-dialog>
    `,
  }),
};
