import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { IpmapComponent } from './components/ipmap/ipmap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(injector: Injector) {
    const ipMapCustomElement = createCustomElement(IpmapComponent, {injector});
    customElements.define('ip-map-custom-element', ipMapCustomElement);
  }
  
}
