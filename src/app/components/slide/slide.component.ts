import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarPoint } from '../../models/grammar.models';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="grammarPoint">
      <h2>{{ grammarPoint.title }}</h2>
      <p>{{ grammarPoint.explanation }}</p>
      <ul>
        <li *ngFor="let example of grammarPoint.examples">{{ example.sentence }}</li>
      </ul>
    </div>
  `
})
export class SlideComponent {
  @Input() grammarPoint: GrammarPoint | undefined;
}
