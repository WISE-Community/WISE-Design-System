import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'table[wise-table]',
  host: {
    class: 'table',
    '[class.table-pin-cols]': 'pinCols',
    '[class.table-pin-rows]': 'pinRows',
    '[class.table-zebra]': 'zebra',
  },
  template: '<ng-content></ng-content>',
  styleUrls: ['./table.component.css'],
})
export class WISETable implements OnInit {
  @HostBinding('class')
  get classes() {
    let classes = this.size ? ` table-${this.size}` : '';
    return classes;
  }
  /**
   * Adds a border to the outside of the table
   */
  @Input() border?: boolean = true;
  /**
   * Makes all the `th` columns sticky
   */
  @Input() pinCols?: boolean;
  /**
   * Makes all the rows inside `thead` and `tfoot` sticky
   */
  @Input() pinRows?: boolean;
  /**
   * If not specified, size is the same as medium ("md")
   */
  @Input() size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Applies a zebra stripe to the table
   */
  @Input() zebra?: boolean;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const wrapper = document.createElement('div');
    wrapper.className = `overflow-auto${this.border ? ' border dark:border-neutral-700' : ''}`;
    wrapper.style.maxHeight = 'inherit';
    wrapper.setAttribute('tabindex', '0');
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
}
