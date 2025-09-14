import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LessonComponent } from '../components/lesson/lesson.component';
import { SlideComponent } from '../components/slide/slide.component';
import { LessonSummaryComponent } from '../components/lesson-summary/lesson-summary.component';

describe('Integration Test: End of the Lesson', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, LessonComponent, SlideComponent, LessonSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the summary screen when the Next button is clicked on the last slide', () => {
    // This is a placeholder test that will fail initially
    // Simulate navigating to the last slide
    const nextButton = fixture.nativeElement.querySelector('button:last-of-type');
    nextButton.click();
    fixture.detectChanges();
    nextButton.click();
    fixture.detectChanges();
    nextButton.click();
    fixture.detectChanges();

    const summary = fixture.nativeElement.querySelector('app-lesson-summary');
    expect(summary).toBeTruthy();
  });
});
