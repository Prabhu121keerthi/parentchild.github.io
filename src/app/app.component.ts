import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <style>
            button {
              margin-right : 40px;
            }
            </style>
            <h1>Passing Data to Child Component</h1>
            <button (click)="increment()">Increment</button>
            <button (click)="decrement()">Decrement</button>
            <app-child-component [count] = "Counter"></app-child-component>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentToChild';

  Counter = 5;

  increment() {
    this.Counter++;
  }

  decrement() {
    this.Counter--;
  }

}
