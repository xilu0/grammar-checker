import { GrammarPoint, Example } from '../models/grammar.models';

// Since the Slide model is not yet defined in grammar.models.ts (per T011),
// we define a simple structure for it here for testing purposes,
// based on the spec.md ("Slide: Represents the visual presentation of a single GrammarPoint").
interface Slide {
  point: GrammarPoint;
  slideIndex: number;
}

describe('Grammar Models', () => {

  describe('GrammarPoint', () => {
    it('should have the correct properties and types', () => {
      const example: Example = {
        sentence: 'This is a simple sentence.',
        type: 'simple'
      };

      const grammarPoint: GrammarPoint = {
        id: 'test-point',
        title: 'Test Point',
        explanation: 'This is a test explanation.',
        examples: [example],
        order: 1
      };

      expect(grammarPoint.id).toEqual('test-point');
      expect(typeof grammarPoint.id).toBe('string');

      expect(grammarPoint.title).toEqual('Test Point');
      expect(typeof grammarPoint.title).toBe('string');

      expect(grammarPoint.explanation).toEqual('This is a test explanation.');
      expect(typeof grammarPoint.explanation).toBe('string');

      expect(grammarPoint.examples.length).toBe(1);
      expect(grammarPoint.examples[0].sentence).toEqual('This is a simple sentence.');
      expect(grammarPoint.examples[0].type).toEqual('simple');

      expect(grammarPoint.order).toEqual(1);
      expect(typeof grammarPoint.order).toBe('number');
    });
  });

  describe('Slide', () => {
    it('should have the correct properties and types', () => {
      const grammarPoint: GrammarPoint = {
        id: 'slide-test-point',
        title: 'Slide Test Point',
        explanation: 'This is for testing the slide.',
        examples: [],
        order: 1
      };

      const slide: Slide = {
        point: grammarPoint,
        slideIndex: 0
      };

      expect(slide.point).toEqual(grammarPoint);
      expect(typeof slide.point).toBe('object');

      expect(slide.slideIndex).toEqual(0);
      expect(typeof slide.slideIndex).toBe('number');
    });
  });

});
