import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amf-card',
  templateUrl: './amf-lib-card.component.html',
  styleUrls: ['./amf-lib-card.component.scss']
})
export class AmfLibCardComponent implements OnInit {

  @Input() car: any;

  constructor() { }

  ngOnInit() {
  }

}
