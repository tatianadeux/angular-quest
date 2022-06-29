import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './menu-inscription.component.html',
  styleUrls: ['./menu-inscription.component.scss']
})
export class MenuInscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    alert('Bouton cliqué')
  }

}
