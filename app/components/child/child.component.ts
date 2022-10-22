import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent="";

  @Output() dataFromChild = new EventEmitter();
  constructor() { }

  sendDataToParent(){
    this.dataFromChild.emit("This data is ")
  }
  ngOnInit(): void {
  }

}
