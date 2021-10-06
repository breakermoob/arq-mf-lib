import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amf-banner',
  templateUrl: './amf-lib-banner.component.html',
  styleUrls: ['./amf-lib-banner.component.scss']
})
export class AmfLibBannerComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
