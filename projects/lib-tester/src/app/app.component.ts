import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public car = {
    name: 'Nissan GTR R34 Panel',
    keyName: 'nissan-gtr-r34-panel',
    url: 'https://i.pinimg.com/originals/90/89/bf/9089bf12e9a6a351c64df21bbee87ede.jpg',
    description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
    origin: 'Japonés'
  }
}
