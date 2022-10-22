import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() child1:string|undefined;
  @Input() child2:string|undefined;
  @Input() child3:string|undefined;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
