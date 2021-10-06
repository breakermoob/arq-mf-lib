import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amf-button',
  templateUrl: './amf-lib-button.component.html',
  styleUrls: ['./amf-lib-button.component.scss']
})
export class AmfLibButtonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
