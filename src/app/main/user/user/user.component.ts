import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cars = [{name:'a1',dt:8.5},{name:'a2',dt:9.3}];
  constructor() { }

  ngOnInit(): void {
  }

}
