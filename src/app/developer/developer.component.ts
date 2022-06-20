import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  developer:Developer = new Developer("Deux", "Tatiana", 24, "female", "I like pizzas")

  constructor() { }

  ngOnInit(): void {

  }

}
