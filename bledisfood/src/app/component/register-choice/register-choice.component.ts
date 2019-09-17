import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-choice',
  templateUrl: './register-choice.component.html',
  styleUrls: ['./register-choice.component.scss']
})
export class RegisterChoiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
