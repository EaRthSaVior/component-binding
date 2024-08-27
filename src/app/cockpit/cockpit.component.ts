import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../server-element/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() addServer = new EventEmitter<Server>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.addServer.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.addServer.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
