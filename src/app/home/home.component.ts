import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = 'Shantanu Das';
  developer: string = 'Java Full Stack Engineer';
  intro: string =
    'Fuelled by a passion for building exciting products, I have a deep desire to excel and continuously improve in my work.';

  constructor() {}

  ngOnInit(): void {}
}
