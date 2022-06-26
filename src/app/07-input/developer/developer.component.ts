import { Component, OnInit } from '@angular/core';
import { Developer } from '../../models/developer.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  skillsList: Skill[] = [
    new Skill("CSS", "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png", "https://developer.mozilla.org/fr/docs/Web/CSS"),
    new Skill("PHP", "https://www.carpemedia.fr/wp-content/uploads/2017/02/formation-php-initiation.png", "https://www.php.net/manual/fr/intro-whatis.php"),
    new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png",  "https://angular.io/")
  ]

  developer: Developer = new Developer("Deux", "Tatiana", 24, "female", "I like pizzas", this.skillsList)

}
