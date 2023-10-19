import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';

const meta: Meta<TypographyComponent> = {
  title: 'Design Tokens/Typography',
  component: TypographyComponent,
  // parameters: {
  //   More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
  //   layout: 'fullscreen',
  // },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    sampleText: {
      table: {
        disable: true,
      },
    },
    bodyFontFamily: {
      table: {
        disable: true,
      },
    },
    headingFontFamily: {
      table: {
        disable: true,
      },
    },
    codeSample: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TypographyComponent>;

export const Typography: Story = {
  render: (args: TypographyComponent) => ({
    props: args,
  }),
  tags: ['hide'],
};
