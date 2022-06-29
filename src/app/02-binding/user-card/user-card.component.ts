import { Component, OnInit } from '@angular/core';
import { UserCard } from '../../models/usercard.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  showAge: boolean = true;

  toggleAge(){
    const userAge = document.querySelector('#id-age')
    this.showAge = !this.showAge;
  }

  userList: UserCard[] = [
    new UserCard("Alex", 24, "assets/pictures/alex.jpeg", "Le cheval c'est trop génial", true, ["Pat Patrouille", "Code Lyoko", "Shaun le Mouton"]),
    new UserCard("Sam", 25, "assets/pictures/sam.jpeg", "J'aime pas les frites", false, ["Inspecteur Gadget"]),
    new UserCard("Clover", 25, "assets/pictures/clover.jpeg", "J'adore le shopping", true, ["Peppa Pig", "Barbapapa"])
  ]


}


