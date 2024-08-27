import { Component } from '@angular/core';
import { Server } from './server-element/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'test',
      content: 'test content',
    },
  ];

  addServer(server: Server) {
    this.serverElements.push(server);
  }
}
