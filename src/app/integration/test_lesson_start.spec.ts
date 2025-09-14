import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LessonComponent } from '../components/lesson/lesson.component';
import { SlideComponent } from '../components/slide/slide.component';

describe('Integration Test: Start a Lesson', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, LessonComponent, SlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the first slide when the Start Lesson button is clicked', () => {
    // This is a placeholder test that will fail initially
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    const slide = fixture.nativeElement.querySelector('app-slide');
    expect(slide).toBeTruthy();
    // expect(slide.textContent).toContain('Present Simple Tense');
  });
});
