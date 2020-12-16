import { Component, OnInit } from '@angular/core';

@Component({
  // Defines the 
  selector: 'app-servers',

  // Reference to the HTML file
  templateUrl: './servers.component.html',

  // Inline HTML (back-ticks allow for formatting).
  // The component is defined as an attribute.
  // template: `
  //   <div class="app-server"></div>
  //   <div class="app-server"></div>`,

  // Reference to the style-sheets (an array of styles)
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Is the New Server button enabled
  allowNewServer: boolean = false;

  // The Create New Server status
  createServerText: string = 'No new server.';
  createServerStatus: boolean = false;

  // The New Server's name
  newServerName: string = 'Fill-in Name Here';

  // The array of server names
  serverNames: Array<string> = ['Default', 'Development'];

  constructor() {
    // Enable the allowNewServer after 10 seconds
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
   }

  ngOnInit(): void {
  }

  // Create New Server button press handler
  onCreateServer(): void {
    // Update the last server name created
    this.createServerText = "Creating server - " + this.newServerName;
    this.createServerStatus = true;

    // Add the server name to the array of server names
    this.serverNames.push(this.newServerName);
  }

  // Update the server name for each keystoke of the input
  // @param event the event data from the action
  onUpdateServerName(event: InputEvent): void {
    // Log the event ot the console
    // console.log(event);

    // Save the value as the server name.
    // Cast the target to an HTMLInputElement to avoid IDE warning.
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
}
