import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { WISEButton } from '../../shared/components/actions/button/button.component';
import { WISEAnchor } from '../../shared/components/actions/button/button.component';
import { CommonModule } from '@angular/common';

type StoryButton = WISEButton & { label?: string };

export default {
  title: 'Components/Actions/Button',
  component: WISEButton,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, WISEButton, WISEAnchor],
    }),
  ],
  tags: ['autodocs'],
  render: (args: StoryButton) => {
    const { label, ...props } = args;
    return {
      props,
      template: `<button
        wise-button
        [block]="block"
        [color]="color"
        [circle]="circle"
        [ghost]="ghost"
        [isDisabled]="isDisabled"
        [outline]="outline"
        [isProcessing]="isProcessing"
        [square]="square"
        [size]="size"
        [tabindex]="tabindex"
        [wide]="wide"
      >
        ${label}
      </button>`,
    };
  },
  argTypes: {
    label: {
      control: 'text',
    },
    block: {
      control: 'boolean',
    },
    circle: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['', 'primary', 'neutral', 'secondary', 'accent', 'success', 'warning'],
      type: 'string',
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    ghost: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    outline: {
      control: 'boolean',
    },
    isProcessing: {
      control: 'boolean',
    },
    square: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['', 'xs', 'sm', 'md', 'lg'],
    },
    tabindex: {
      control: 'number',
    },
    wide: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Button',
    block: false,
    circle: false,
    color: undefined,
    ghost: false,
    isDisabled: false,
    outline: false,
    isProcessing: false,
    square: false,
    size: undefined,
    tabindex: undefined,
    wide: false,
  },
} as Meta<StoryButton>;

export const Button: StoryObj<StoryButton> = {};

export const BrandColors: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button>Default</button>
        <button wise-button color="primary">Primary</button>
        <button wise-button color="neutral">Neutral</button>
        <div class="divider divider-horizontal"></div>
        <button wise-button color="secondary">Secondary</button>
        <button wise-button color="accent">Accent</button>
      </div>
    `,
  }),
};

export const StateColors: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button color="success">Success</button>
        <button wise-button color="warning">Warning</button>
      </div>
    `,
  }),
};

export const DisplayVariants: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button color="primary">Filled</button>
        <button wise-button color="primary" outline="true">Outline</button>
        <button wise-button ghost="true">Ghost</button>
      </div>
    `,
  }),
};

export const Icons: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button circle="true" ghost="true" color="primary">
          <span class="fas fa-bars" title="Open menu"></span>
        </button>
        <button wise-button circle="true" ghost="true">
          <span class="fas fa-archive" title="Archive"></span>
        </button>
        <button wise-button circle="true">
          <span class="fas fa-close" title="Close"></span>
        </button>
        <button wise-button circle="true" color="primary">
          <span class="fas fa-question" title="Info"></span>
        </button>
        <button wise-button>
          <span class="fas fa-home"></span>
          Home
        </button>
        <button wise-button>
          Home
          <span class="fas fa-home"></span>
        </button>
      </div>
    `,
  }),
};

export const ProcessingAndDisabled: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button isProcessing="true">Submit</button>
        <a wise-button isDisabled="true">Anchor</a>
        <button wise-button disabled>Button</button>
      </div>
    `,
  }),
};

export const Shapes: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button circle="true">
          <span class="fas fa-close" title="Close"></span>
        </button>
        <button wise-button square="true">
          <span class="fas fa-close" title="Close"></span>
        </button>
      </div>
    `,
  }),
};
export const Sizes: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <button wise-button size="xs">Extra Small</button>
        <button wise-button size="sm">Small</button>
        <button wise-button>Medium</button>
        <button wise-button size="lg">Large</button>
      </div>
    `,
  }),
};

export const Widths: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-col">
        <div>
          <button wise-button>Auto</button>
        </div>
        <div>
          <button wise-button wide="true">Wide</button>
        </div>
        <div>
          <button wise-button block="true">Block</button>
        </div>
      </div>
    `,
  }),
};

export const HTMLElements: StoryObj<StoryButton> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="gap-2 flex flex-wrap">
        <a wise-button>Anchor</a>
        <button wise-button type="submit">Button</button>
        <input wise-button type="submit" value="Submit" />
        <input wise-button type="radio" aria-label="Radio" />
        <input wise-button type="checkbox" aria-label="Checkbox" />
        <input wise-button type="reset" value="Reset" />
      </div>
    `,
  }),
};
