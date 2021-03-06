import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IEvent} from "../event.model";


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent
  constructor( ) { }

  ngOnInit() {
  }

  LateStart() {
    const colorStatus = this.event && this.event.time === '8:00 am'
    return {green: colorStatus, bold: colorStatus}
  }

  getCardStyle () {
     return {height: '200px', 'margin-bottom': '10px'}
  }

  EarlyStart () {
    if(this.event && this.event.time === '8:00 am')
      return 'green bold'
    return ''
  }

}
