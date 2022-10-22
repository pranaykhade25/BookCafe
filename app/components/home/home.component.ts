import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  c1:string=''
  c2:string='NEW Books Available....'
  c3:string='Make Your Day Feel Fresh'
  src1="assets/c1.jpg"
  src2="assets/c2.jpg"
  src3="assets/c3.png"
  src4="assets/c4.png"
  src5="assets/c5.jpg"
  src6="assets/c6.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
