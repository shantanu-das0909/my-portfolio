import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project = new Project();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // add projects
    this.projectService.projects.forEach((project) => {
      this.projects.push(project);
    });

    this.selectedProject = this.projects[0];
  }

  displayDetails(project: Project) {
    this.selectedProject = project;
  }
}
