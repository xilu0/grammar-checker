import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GrammarDataService } from '../services/grammar-data.service';
import { GrammarPoint } from '../models/grammar.models';

describe('GrammarDataService', () => {
  let service: GrammarDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GrammarDataService]
    });
    service = TestBed.inject(GrammarDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve grammar points from the API', () => {
    const dummyGrammarPoints: GrammarPoint[] = [
      {
        id: 'test-id',
        title: 'Test Title',
        explanation: 'Test Explanation',
        examples: [],
        order: 1
      }
    ];

    service.getGrammarPoints().subscribe(grammarPoints => {
      expect(grammarPoints).toEqual(dummyGrammarPoints);
    });

    const req = httpTestingController.expectOne('/assets/grammar.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyGrammarPoints);
  });
});
