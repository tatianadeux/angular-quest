import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserReactive } from 'src/app/models/user-reactiveform.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  streetName = new FormControl('');
  streetNumber = new FormControl(0);
  zipcode = new FormControl('');
  city = new FormControl('')

  usersList: UserReactive[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitCreateNewUser(){
    /* voir les données entrées dans la console */
    this.usersList.push(
      new UserReactive(
      this.username.value, this.email.value, this.password.value, this.streetName.value,
      this.streetNumber.value, this.zipcode.value, this.city.value));
  }


}
