import { Component } from '@angular/core';
import { TabsModule } from 'src/app/shared/components/navigation/tabs/tabs.module';
import { DocsService } from '../../docs.service';

@Component({
  standalone: true,
  selector: 'basic-dialog-info',
  imports: [TabsModule],
  providers: [DocsService],
  templateUrl: './basic-dialog-info.component.html',
  styleUrls: ['./basic-dialog-info.component.css'],
})
export class BasicDialogInfo {
  constructor(private docsService: DocsService) {}
}
