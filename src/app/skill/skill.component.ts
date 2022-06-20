import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skill = new Skill("","","");

  constructor() { }

  ngOnInit(): void {
  }

}

