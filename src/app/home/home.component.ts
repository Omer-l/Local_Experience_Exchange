import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  housingLocation: HousingLocation = {
    id: 0,
    name: 'Test Home',
    city: 'Test City',
    state: 'Test State',
    photo: '{this.baseURL}/example-house.jpg',
    availableUnits: 2,
    wifi: true,
    laundry: true,
  }
}
