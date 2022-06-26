import { Component, OnInit } from '@angular/core';
import { Onomatopoeias } from '../../models/onomatopoeias.model';

@Component({
  selector: 'app-onomatopoeias',
  templateUrl: './onomatopoeias.component.html',
  styleUrls: ['./onomatopoeias.component.scss']
})
export class OnomatopoeiasComponent implements OnInit {

  onomatopoeias: string[] = [];

  constructor(){
  }

  ngOnInit(): void {
  }

  receivedWrittenValue: string = "";

  onReceiveNewOnomatopia(writtenValue: string): void {
    console.log(writtenValue);
    this.receivedWrittenValue = writtenValue;
    this.onomatopoeias.push(writtenValue);
  }

}
