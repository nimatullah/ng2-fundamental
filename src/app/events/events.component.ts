import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import {ToastrService} from '../common/toastr.service';
import {IEvent} from "./event.model";


@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_parent :IEvent[]
  constructor(private _eventsService : EventsService, private toastr : ToastrService) { }

  ngOnInit() {
    this.event_parent = this._eventsService.getEvents()
  }

  RecieveData(data) {
      console.log('Recieved :', data)
  }

  checkToastrAction(eventName) {
    this.toastr.success(eventName)
  }
}
