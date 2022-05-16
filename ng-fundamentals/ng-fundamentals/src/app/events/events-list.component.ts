import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template:  `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>

            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}</span>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {


    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2035',
        time:"11:00 AM",
        price: 999.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}