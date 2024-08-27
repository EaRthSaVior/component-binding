import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent {
  @Input('srvElement') element: Server;
}
