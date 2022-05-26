import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  step = 1;

  stepForward() {this.step++}
  stepBack() {this.step--}
  constructor() {}

  ngOnInit(): void {
  }

}
