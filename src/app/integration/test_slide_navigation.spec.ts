import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LessonComponent } from '../components/lesson/lesson.component';
import { SlideComponent } from '../components/slide/slide.component';
import { GrammarDataService } from '../services/grammar-data.service';
import { of } from 'rxjs';
import { GrammarPoint } from '../models/grammar.models';

describe('Integration Test: Slide Navigation', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;
  let httpTestingController: HttpTestingController;
  let grammarDataService: GrammarDataService;

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

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, LessonComponent, SlideComponent ],
      providers: [GrammarDataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    grammarDataService = TestBed.inject(GrammarDataService);

    // Mock the service call
    spyOn(grammarDataService, 'getGrammarPoints').and.returnValue(of(mockGrammarPoints));

    fixture.detectChanges(); // ngOnInit triggers getGrammarPoints
    tick(); // Simulate the passage of time for the observable to complete
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should display the next slide when the Next button is clicked', fakeAsync(() => {
    component.startLesson();
    fixture.detectChanges();
    tick();

    const button = fixture.nativeElement.querySelector('button:last-of-type');
    button.click();
    fixture.detectChanges();
    tick();

    const slide = fixture.nativeElement.querySelector('app-slide');
    expect(slide).toBeTruthy();
    expect(slide.textContent).toContain('Title 2');
  }));

  it('should display the previous slide when the Previous button is clicked', fakeAsync(() => {
    component.startLesson();
    fixture.detectChanges();
    tick();

    const nextButton = fixture.nativeElement.querySelector('button:last-of-type');
    nextButton.click();
    fixture.detectChanges();
    tick();

    const previousButton = fixture.nativeElement.querySelector('button:nth-of-type(2)');
    previousButton.click();
    fixture.detectChanges();
    tick();

    const slide = fixture.nativeElement.querySelector('app-slide');
    expect(slide).toBeTruthy();
    expect(slide.textContent).toContain('Title 1');
  }));
});
