import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { Address } from 'src/app/address';
interface State {
  value: string;
  viewValue: string;
}

@Component({

  selector: 'app-contact,',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  address = new Address();
  selectedValue: string | undefined;
  selectedState: string | undefined;
 

  states: State[] = [
    {value: 'mh', viewValue: 'Maharashtra'},
    {value: 'goa', viewValue: 'Goa'},
    {value: 'punjab', viewValue: 'Punjab'},
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
  }
  

}
