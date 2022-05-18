import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <!--Nav bar is placed here to ensure every page laods with the nav bar component at the top-->
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-fundementals';
}
