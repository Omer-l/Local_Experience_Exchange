import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: '      <header class="brand-name">\n' +
    '        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />\n' +
    '      </header>\n' +
    '      <section class="content">\n' +
    '        <app-home></app-home>\n' +
    '      </section>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lee';
}

