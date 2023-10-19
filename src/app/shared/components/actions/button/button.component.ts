import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'button[wise-button], input[wise-button]',
  host: {
    '[attr.disabled]': '(isProcessing || isDisabled) ? "disabled" : disabled',
    '[attr.tabindex]': 'isDisabled ? -1 : tabindex',
    '[class.btn-block]': 'block',
    '[class.btn-circle]': 'circle',
    '[class.btn-ghost]': 'ghost',
    '[class.btn-outline]': 'outline',
    '[class.btn-square]': 'square',
    '[class.btn-wide]': 'wide',
    class: 'btn',
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [CommonModule],
})
export class WISEButton {
  @HostBinding('class')
  get classes() {
    let classes = this.color ? (this.ghost ? `text-${this.color}` : `btn-${this.color}`) : '';
    classes += this.size ? ` btn-${this.size}` : '';
    return classes;
  }
  /**
   * Takes up the full width of its container
   */
  @Input() block?: boolean;
  /**
   * Has a circle shape
   */
  @Input() circle?: boolean;
  /**
   * Changes the color of the button
   */
  @Input() color?: 'primary' | 'neutral' | 'secondary' | 'accent' | 'success' | 'warning';
  @Input() disabled?: boolean;
  /**
   * Has a transparent background except on hover
   */
  @Input() ghost?: boolean;
  /**
   * Forces button to be disabled and removes pointer events
   * (Can also use the `disabled` attribute on `button` or `input`)
   */
  @Input() isDisabled?: boolean;
  /**
   * Shows a spinner and disables the button
   */
  @Input() isProcessing?: boolean;
  /**
   * Has a border and transparent background
   */
  @Input() outline?: boolean;
  /**
   * Has a square shape
   */
  @Input() square?: boolean;
  /**
   * If not specified, size is the same as medium ("md")
   */
  @Input() size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Specifies the tab order of the button
   */
  @Input() tabindex?: number;
  /**
   * Has a width of 16rem
   */
  @Input() wide?: boolean;

  constructor() {}
}

@Component({
  standalone: true,
  selector: 'a[wise-button]',
  host: {
    '[class.btn-disabled]': '(isProcessing || isDisabled) || null',
    '[attr.tabindex]': '(isProcessing || isDisabled) ? -1 : (tabindex || 0)',
    '[attr.aria-disabled]': '(isProcessing || isDisabled) || null',
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class WISEAnchor extends WISEButton {}
