import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-child-component',
  template: `<h2>Child Component</h2>
              current count is {{count}}`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() count:number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }
  
}
