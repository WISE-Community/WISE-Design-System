import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { WISETab } from '../tab/tab.component';

@Component({
  selector: 'wise-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
})
export class WISETabGroup implements AfterContentInit, OnChanges {
  @ContentChildren(WISETab) tabs!: QueryList<WISETab>;

  /**
   * Takes up the full width of its container
   */
  @Input()
  block?: boolean = false;

  /**
   * Sets the selected tab by index
   */
  @Input()
  selectedIndex: number = 0;

  /**
   * The size of the tab group
   */
  @Input()
  size?: 'xs' | 'sm' | 'lg' | '' = '';

  /**
   * The name of the tab group (used for accessibility; should be unique if there are multiple tab groups on the page)
   */
  @Input()
  tabGroupName: string = 'tabgroup';

  /**
   * The style of the tab group
   */
  @Input()
  tabStyle?: 'bordered' | 'lifted' | 'boxed' | '' = 'bordered';

  @Output() selectedIndexChange = new EventEmitter<number>();

  selectedTab: WISETab | undefined;
  sizeClass: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['size']?.currentValue) {
      this.sizeClass = this.size ? `tab-${this.size}` : '';
    }

    if (changes?.['selectedIndex']?.currentValue) {
      this.selectTabByIndex(this.selectedIndex);
    }
  }

  ngAfterContentInit() {
    // this.selectTab(this.tabs.toArray()[this.selectedIndex]);
    this.selectTabByIndex(this.selectedIndex);
  }

  protected selectTabByIndex(index: number, event?: Event) {
    this.selectedIndex = index;
    this.selectedIndexChange.emit(this.selectedIndex);
    this.selectTab(this.tabs.toArray()[index], event);
  }

  protected selectTab(tab: WISETab, event?: Event) {
    event?.preventDefault();
    this.selectedTab = tab;
  }
}
