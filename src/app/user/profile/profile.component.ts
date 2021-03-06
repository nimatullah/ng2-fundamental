import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import {Toastr, TOASTR_TOKEN} from "../../common/toastr.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile : FormGroup
  private firstName : FormControl
  private lastName : FormControl

  constructor(private _authService : AuthService, private router : Router, @Inject(TOASTR_TOKEN) private toastr : Toastr) { }

  ngOnInit() {

    this.firstName = new FormControl(this._authService.currentUser.firstName , [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required)

    this.formProfile = new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName
    })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName () {
    return this.lastName.valid || this.lastName.untouched
  }
  saveUser(formValue) {
    this._authService.updateCurrentUser(formValue.firstName, formValue.lastName)
    this.toastr.success("Records inserted successfully")
    return this.router.navigate(['/events'])
  }

  cancel () {
    return this.router.navigate(['/events'])
  }
}
