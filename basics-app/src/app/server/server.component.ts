import { Component } from '@angular/core';

@Component({
    // Selector as element
    // selector: 'app-server',

    // Selector as attribute (enclosed in square brackets)
    // selector: '[app-server]',

    // Selector as class
    selector: '.app-server',

    templateUrl: './server.component.html',

    // Inline style-sheets
    styles: [`
        h3 {
            color: black;
        }

        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    // Define some class variables with explicit typing
    serverId: number = 4321;
    serverStatus: string = '';

    constructor() {
        // Sets the status randomly
        this.serverStatus = (Math.random() > 0.5) ? 'Online' : 'Offline';
    }

    // Gets the server's status
    getServerStatus(): string {
        return this.serverStatus;
    }

    // Gets the color, based on the status.
    // @return red when offline, otherwise green
    getServerStatusColor(): string {
        return (this.serverStatus === 'Offline') ? 'red' : 'green';
    }
}
