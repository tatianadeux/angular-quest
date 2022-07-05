import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserReactive } from 'src/app/models/user-reactiveform.model';
import { emailValidator } from '../validators/email-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  userForm = this.formBuilder.group({
    username : ['', Validators.required],
    credentials: this.formBuilder.group({
      email : ['', [Validators.required, emailValidator]],
      password : ['', Validators.required],
    }),
    streetName : [''],
    streetNumber :[],
    zipcode : [''],
    city : ['']
  })

  usersList: UserReactive[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmitCreateNewUser(){

    /* voir les données entrées dans la console */
    let username = this.userForm.get('username')?.value;
    let email = this.userForm.get('credentials')?.get('email')?.value;
    let password = this.userForm.get('credentials')?.get('password')?.value;
    let streetName = this.userForm.get('streetName')?.value;
    let streetNumber = this.userForm.get('streetNumber')?.value;
    let zipcode = this.userForm.get('zipcode')?.value;
    let city = this.userForm.get('city')?.value;

    this.usersList.push(
      new UserReactive(username, email, password, streetName, streetNumber, zipcode, city));
  }

  get username(){
    console.log(this.userForm.controls['username']);
    return this.userForm.controls['username'];
  }

  get credentials(){
    console.log(this.userForm.controls['credentials'])
    return this.userForm.controls['credentials'];
  }

  get email() {
    console.log(this.userForm.controls['credentials'].get('email'))
    return this.userForm.controls['credentials'].get('email');
  }

}
