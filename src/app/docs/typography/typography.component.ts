import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})
export class TypographyComponent {
  sampleText: string = $localize`Web-based Inquiry Science Environment`;
  bodyFontFamily: string = 'Open Sans';
  headingFontFamily: string = 'Raleway';
  codeSample: string = `
    import { Component, HostBinding, Input } from '@angular/core';

    @Component({
      selector: 'button[wise-button], input[wise-button]',
      host: {
        '[attr.disabled]': '(isProcessing || isDisabled) || null',
        '[attr.tabindex]': 'isDisabled ? -1 : tabindex',
        '[class.btn-block]': 'block',
        '[class.btn-circle]': 'circle',
        ...
  `;

  constructor() {}
}
