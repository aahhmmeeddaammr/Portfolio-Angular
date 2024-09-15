import { Component, Input, input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectdata!:Project;
}
