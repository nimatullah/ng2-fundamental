import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  Dirty:boolean = true
  constructor(private  router : Router) { }

  ngOnInit() {
  }

  cancel () {
    this.router.navigate(['/events'])
  }
}