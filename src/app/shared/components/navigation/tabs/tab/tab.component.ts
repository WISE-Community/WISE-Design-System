import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'wise-tab',
  template: `
    <ng-content select="[tabLabel]"></ng-content>
    <ng-content select="[tabContent]"></ng-content>
  `,
  styleUrls: ['./tab.component.css'],
})
export class WISETab {
  @ContentChild('tabContent', { static: false }) content!: TemplateRef<any>;
  @ContentChild('tabLabel', { static: false }) label!: TemplateRef<any>;
}
