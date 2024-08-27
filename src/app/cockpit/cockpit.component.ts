import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Server } from '../server-element/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() addServer = new EventEmitter<Server>();

  @ViewChild('serverInput') serverInput: ElementRef;

  onAddServer(serverContentInput: HTMLInputElement) {
    this.addServer.emit({
      type: 'server',
      name: this.serverInput.nativeElement.value,
      content: serverContentInput.value,
    });
  }

  onAddBlueprint(serverContentInput: HTMLInputElement) {
    this.addServer.emit({
      type: 'blueprint',
      name: this.serverInput.nativeElement.value,
      content: serverContentInput.value,
    });
  }
}
