import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amf-link',
  templateUrl: './amf-lib-link.component.html',
  styleUrls: ['./amf-lib-link.component.scss']
})
export class AmfLibLinkComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
