import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';
import { Experience } from './experience.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  educations: Education[] = [];
  experiences: Experience[] = [];
  skills: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // add education
    const secondary: Education = new Education('abc', 'abc', 'abc');
    const higherSecondary: Education = new Education(
      'Higher Secondary in Science',
      'Dasghara High School',
      '2016 - 2018'
    );
    const btech: Education = new Education(
      'B.Tech. in Electrical Engineering',
      'Academy of Technology',
      '2018 - 2022'
    );
    this.educations.push(btech, higherSecondary);

    // add experience
    const experience1: Experience = new Experience(
      'Intern',
      'Cognizant Technology Solutions',
      'February 2022 - August 2022'
    );
    const experience2: Experience = new Experience(
      'Programmer Analyst',
      'Cognizant Technology Solutions',
      'September 2022 - Present'
    );
    this.experiences.push(experience2, experience1);

    // add skills
    const tempSkill: string[] = [
      'Java',
      'Spring Boot',
      'Microservice',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'TypeScript',
      'Angular',
      'MySQL',
      'Python',
      'Tensorflow',
    ];
    tempSkill.forEach((skill) => {
      this.skills.push(skill);
    });
  }
}
