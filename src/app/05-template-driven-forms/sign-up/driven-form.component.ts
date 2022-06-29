import { Component, OnInit } from '@angular/core';
import { DrivenUser } from 'src/app/models/driven-form.model';

@Component({
  selector: 'app-drive-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComoponent implements OnInit {

  drivenUser: DrivenUser = new DrivenUser("","","","");

  drivenUserList: DrivenUser[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.drivenUserList.push(new DrivenUser(this.drivenUser.firstname, this.drivenUser.lastname, this.drivenUser.email, this.drivenUser.password))
  }
}
