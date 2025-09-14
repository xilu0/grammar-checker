import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarDataService } from '../../services/grammar-data.service';
import { GrammarPoint } from '../../models/grammar.models';
import { SlideComponent } from '../slide/slide.component';
import { LessonSummaryComponent } from '../lesson-summary/lesson-summary.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, SlideComponent, LessonSummaryComponent],
  template: `
    <div *ngIf="!lessonFinished">
      <div *ngIf="currentSlide">
        <app-slide [grammarPoint]="currentSlide"></app-slide>
        <button (click)="previousSlide()" [disabled]="currentSlideIndex === 0">Previous</button>
        <button (click)="nextSlide()">Next</button>
      </div>
      <div *ngIf="!currentSlide">
        <button (click)="startLesson()">Start Lesson</button>
      </div>
    </div>
    <div *ngIf="lessonFinished">
      <app-lesson-summary></app-lesson-summary>
    </div>
  `
})
export class LessonComponent implements OnInit {
  grammarPoints: GrammarPoint[] = [];
  currentSlide: GrammarPoint | undefined;
  currentSlideIndex = 0;
  lessonFinished = false;

  constructor(private grammarDataService: GrammarDataService) { }

  ngOnInit(): void {
    this.grammarDataService.getGrammarPoints().subscribe(data => {
      this.grammarPoints = data;
    });
  }

  startLesson(): void {
    this.currentSlide = this.grammarPoints[0];
    this.currentSlideIndex = 0;
  }

  nextSlide(): void {
    if (this.currentSlideIndex < this.grammarPoints.length - 1) {
      this.currentSlideIndex++;
      this.currentSlide = this.grammarPoints[this.currentSlideIndex];
    } else {
      this.lessonFinished = true;
    }
  }

  previousSlide(): void {
    this.currentSlideIndex--;
    this.currentSlide = this.grammarPoints[this.currentSlideIndex];
  }
}