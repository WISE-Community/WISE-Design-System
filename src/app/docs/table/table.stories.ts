import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { WISETable } from '../../shared/components/layout/table/table.component';

const defaultContent = `
  <thead>
    <tr>
      <th>Header 1</th>
      <td>Header 2</td>
      <td>Header 3</td>
      <td>Header 4</td>
      <td>Header 5</td>
      <td>Header 6</td>
      <td>Header 7</td>
      <th>Header 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1.1</th>
      <td>1.2</td>
      <td>1.3</td>
      <td>1.4</td>
      <td>1.5</td>
      <td>1.6</td>
      <td>1.7</td>
      <th>1.8</th>
    </tr>
    <tr>
      <th>2.1</th>
      <td>2.2</td>
      <td>2.3</td>
      <td>2.4</td>
      <td>2.5</td>
      <td>2.6</td>
      <td>2.7</td>
      <th>2.8</th>
    </tr>
    <tr>
      <th>3.1</th>
      <td>3.2</td>
      <td>3.3</td>
      <td>3.4</td>
      <td>3.5</td>
      <td>3.6</td>
      <td>3.7</td>
      <th>3.8</th>
    </tr>
    <tr>
      <th>4.1</th>
      <td>4.2</td>
      <td>4.3</td>
      <td>4.4</td>
      <td>4.5</td>
      <td>4.6</td>
      <td>4.7</td>
      <th>4.8</th>
    </tr>
    <tr>
      <th>5.1</th>
      <td>5.2</td>
      <td>5.3</td>
      <td>5.4</td>
      <td>5.5</td>
      <td>5.6</td>
      <td>5.7</td>
      <th>5.8</th>
    </tr>
    <tr>
      <th>6.1</th>
      <td>6.2</td>
      <td>6.3</td>
      <td>6.4</td>
      <td>6.5</td>
      <td>6.6</td>
      <td>6.7</td>
      <th>6.8</th>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <td>Footer 2</td>
      <td>Footer 3</td>
      <td>Footer 4</td>
      <td>Footer 5</td>
      <td>Footer 6</td>
      <td>Footer 7</td>
      <th>Footer 8</th>
    </tr>
  </tfoot>
`;

type StoryTable = WISETable & { tableContent?: string };

const meta: Meta<StoryTable> = {
  title: 'Components/Layout/Table',
  component: WISETable,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, WISETable],
    }),
  ],
  tags: ['autodocs'],
  render: (tableContent, ...args) => {
    return {
      props: args,
      template: `
        <div class="max-h-72 max-w-xl">
          <table
            class="table-auto"
            wise-table
            [border]="border"
            [pinCols]="pinCols"
            [pinRows]="pinRows"
            [size]="size"
            [zebra]="zebra"
          >
            ${defaultContent}
          </table>
        </div>
      `,
    };
  },
  argTypes: {
    tableContent: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    border: {
      control: 'boolean',
    },
    pinCols: {
      control: 'boolean',
    },
    pinRows: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['', 'xs', 'sm', 'md', 'lg'],
    },
    zebra: {
      control: 'boolean',
    },
  },
  args: {
    border: true,
    pinCols: false,
    pinRows: false,
    size: undefined,
    zebra: false,
  },
};
export default meta;

export const Table: StoryObj<StoryTable> = {};

export const PinColumns: StoryObj<StoryTable> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="max-w-xl">
        <table wise-table [pinCols]="true">
          ${defaultContent}
        </table>
      </div>
    `,
  }),
};

export const PinRows: StoryObj<StoryTable> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="max-h-72">
        <table wise-table [pinRows]="true">
          ${defaultContent}
        </table>
      </div>
    `,
  }),
};

export const Sizes: StoryObj<StoryTable> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="wisetype max-w-none">
        <p>Extra Small:</p>
        <table wise-table size="xs">
          <thead>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
              <td>Column 5</td>
              <td>Column 6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1</td>
              <td>1.2</td>
              <td>1.3</td>
              <td>1.4</td>
              <td>1.5</td>
              <td>1.6</td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>2.2</td>
              <td>2.3</td>
              <td>2.4</td>
              <td>2.5</td>
              <td>2.6</td>
            </tr>
          </tbody>
        </table>
        <p>Small:</p>
        <table wise-table size="sm">
          <thead>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
              <td>Column 5</td>
              <td>Column 6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1</td>
              <td>1.2</td>
              <td>1.3</td>
              <td>1.4</td>
              <td>1.5</td>
              <td>1.6</td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>2.2</td>
              <td>2.3</td>
              <td>2.4</td>
              <td>2.5</td>
              <td>2.6</td>
            </tr>
          </tbody>
        </table>
        <p>Medium:</p>
        <table wise-table size="md">
          <thead>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
              <td>Column 5</td>
              <td>Column 6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1</td>
              <td>1.2</td>
              <td>1.3</td>
              <td>1.4</td>
              <td>1.5</td>
              <td>1.6</td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>2.2</td>
              <td>2.3</td>
              <td>2.4</td>
              <td>2.5</td>
              <td>2.6</td>
            </tr>
          </tbody>
        </table>
        <p>Large:</p>
        <table wise-table size="lg">
          <thead>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
              <td>Column 5</td>
              <td>Column 6</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1</td>
              <td>1.2</td>
              <td>1.3</td>
              <td>1.4</td>
              <td>1.5</td>
              <td>1.6</td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>2.2</td>
              <td>2.3</td>
              <td>2.4</td>
              <td>2.5</td>
              <td>2.6</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};

export const Zebra: StoryObj<StoryTable> = {
  parameters: {
    controls: { exclude: /.*/g },
  },
  render: (args) => ({
    props: args,
    template: `
      <table wise-table [zebra]="true">
        ${defaultContent}
      </table>
    `,
  }),
};
