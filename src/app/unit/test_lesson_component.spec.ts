import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonComponent } from '../components/lesson/lesson.component';
import { GrammarDataService } from '../services/grammar-data.service';
import { of } from 'rxjs';
import { GrammarPoint } from '../models/grammar.models';
import { SlideComponent } from '../components/slide/slide.component';
import { LessonSummaryComponent } from '../components/lesson-summary/lesson-summary.component';

describe('LessonComponent', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;
  let grammarDataServiceSpy: jasmine.SpyObj<GrammarDataService>;

  const mockGrammarPoints: GrammarPoint[] = [
    {
      id: 'id1',
      title: 'Title 1',
      explanation: 'Explanation 1',
      examples: [],
      order: 1
    },
    {
      id: 'id2',
      title: 'Title 2',
      explanation: 'Explanation 2',
      examples: [],
      order: 2
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('GrammarDataService', ['getGrammarPoints']);
    await TestBed.configureTestingModule({
      imports: [LessonComponent, SlideComponent, LessonSummaryComponent],
      providers: [
        { provide: GrammarDataService, useValue: spy }
      ]
    })
    .compileComponents();

    grammarDataServiceSpy = TestBed.inject(GrammarDataService) as jasmine.SpyObj<GrammarDataService>;
    grammarDataServiceSpy.getGrammarPoints.and.returnValue(of(mockGrammarPoints));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load grammar points on init', () => {
    expect(grammarDataServiceSpy.getGrammarPoints).toHaveBeenCalled();
    expect(component.grammarPoints).toEqual(mockGrammarPoints);
  });

  it('should start lesson and display the first slide', () => {
    component.startLesson();
    expect(component.currentSlide).toEqual(mockGrammarPoints[0]);
    expect(component.currentSlideIndex).toBe(0);
  });

  it('should navigate to the next slide', () => {
    component.startLesson();
    component.nextSlide();
    expect(component.currentSlide).toEqual(mockGrammarPoints[1]);
    expect(component.currentSlideIndex).toBe(1);
  });

  it('should navigate to the previous slide', () => {
    component.startLesson();
    component.nextSlide(); // Move to second slide
    component.previousSlide(); // Move back to first slide
    expect(component.currentSlide).toEqual(mockGrammarPoints[0]);
    expect(component.currentSlideIndex).toBe(0);
  });

  it('should not navigate previous if on the first slide', () => {
    component.startLesson();
    component.previousSlide();
    expect(component.currentSlide).toEqual(mockGrammarPoints[0]);
    expect(component.currentSlideIndex).toBe(0);
  });

  it('should mark lesson as finished after the last slide', () => {
    component.startLesson();
    component.nextSlide(); // Move to second slide
    component.nextSlide(); // Attempt to move past last slide
    expect(component.lessonFinished).toBe(true);
    expect(component.currentSlide).toBeUndefined();
  });
});
