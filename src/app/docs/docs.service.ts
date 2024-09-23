import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private viewContainerRef: ViewContainerRef) {}

  getTemplateString(templateRef: TemplateRef<any>): string {
    const viewRef = this.viewContainerRef.createEmbeddedView(templateRef);
    const templateHtml = viewRef.rootNodes[0].innerHTML;
    viewRef.destroy(); // Clean up the view
    return templateHtml;
  }
}
