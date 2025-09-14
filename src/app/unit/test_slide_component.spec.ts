import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideComponent } from '../components/slide/slide.component';
import { GrammarPoint } from '../models/grammar.models';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the grammar point details when provided', () => {
    const testGrammarPoint: GrammarPoint = {
      id: 'test-id',
      title: 'Test Title',
      explanation: 'Test Explanation',
      examples: [
        { sentence: 'Example 1', type: 'simple' },
        { sentence: 'Example 2', type: 'complex' }
      ],
      order: 1
    };
    component.grammarPoint = testGrammarPoint;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(testGrammarPoint.title);
    expect(compiled.querySelector('p').textContent).toContain(testGrammarPoint.explanation);
    expect(compiled.querySelectorAll('li').length).toBe(testGrammarPoint.examples.length);
    expect(compiled.querySelectorAll('li')[0].textContent).toContain(testGrammarPoint.examples[0].sentence);
  });

  it('should not display anything if no grammar point is provided', () => {
    component.grammarPoint = undefined;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')).toBeNull();
    expect(compiled.querySelector('p')).toBeNull();
    expect(compiled.querySelector('ul')).toBeNull();
  });
});
