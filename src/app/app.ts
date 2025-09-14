import { Component } from '@angular/core';
import { LessonComponent } from './components/lesson/lesson.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LessonComponent],
  template: '<app-lesson></app-lesson>',
  styleUrl: './app.css'
})
export class App {
}
