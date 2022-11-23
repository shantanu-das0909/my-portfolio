import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  smartContactManager: Project = new Project(
    1,
    'Smart Contact Manager',
    'This web based app is basically used for managing contacts easily.',
    [
      'Java',
      'Spring Boot',
      'MySQL',
      'Microservice',
      'HTML',
      'CSS',
      'Bootstrap',
      'Angular',
    ],
    'https://github.com/shantanu-das0909/smart-contact-manager',
    'https://drive.google.com/file/d/1ZWNYyBeaQ0Ut_tLlLArmD77BDCosag51/view?usp=share_link',
    '../../assets/img/scm.png'
  );

  portfolio: Project = new Project(
    2,
    'Portfolio',
    'This is my own Portfolio.',
    ['HTML', 'CSS', 'Bootstrap', 'Angular'],
    'https://github.com/shantanu-das0909/portfolio',
    'https://drive.google.com/file/d/1ZWNYyBeaQ0Ut_tLlLArmD77BDCosag51/view?usp=share_link',
    '../../assets/img/portfolio.png'
  );

  sudokuSolver: Project = new Project(
    3,
    'Sudoku Solver',
    `This project is made for solving Sudoku Board. 
    It can solve the sudoku from an image of a Sudoku board. 
    I used CNN to train the model and used Back Tracking algo for solving purpose.`,
    ['Python', 'Tensorflow', 'CNN', 'Back Tracking Algo'],
    'https://github.com/shantanu-das0909/sudoku-solver',
    'https://drive.google.com/file/d/1wNBpV50EsubogNuyRTFSt2rfNa4JU9rS/view',
    '../../assets/img/sudoku.png'
  );

  temp4: Project = new Project(
    4,
    'Smart Contact Manager',
    'This web based app is basically used for managing contacts easily.',
    ['Java', 'Spring Boot', 'Microservice', 'Angular'],
    'https://github.com/shantanu-das0909/smart-contact-manager',
    'https://drive.google.com/file/d/1ZWNYyBeaQ0Ut_tLlLArmD77BDCosag51/view?usp=share_link',
    '../../assets/img/scm.png'
  );

  projects: Project[] = [
    this.smartContactManager,
    this.portfolio,
    this.sudokuSolver,
    this.temp4,
  ];
}
