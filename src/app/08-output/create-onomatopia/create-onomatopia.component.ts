import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateOnomatopia } from '../../models/create-onomatopia.model';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  writtenValue: string = "";

  createOnomatopia(): void{
    /* mon véhicule emet la valeur entrée via [(ngModel)]*/
    this.sendOnomatopiaToParent.emit(this.writtenValue)
  }


}
