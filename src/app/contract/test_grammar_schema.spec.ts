import Ajv from 'ajv';

describe('Contract Test: grammar.json against grammar.schema.json', () => {
  it('should validate the grammar.json against the schema', () => {
    const ajv = new Ajv();
    const schema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Grammar Points",
      "description": "A collection of grammar points for the English Grammar Practice SPA.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "A unique identifier for the grammar point."
          },
          "title": {
            "type": "string",
            "description": "The name of the grammar point."
          },
          "explanation": {
            "type": "string",
            "description": "A clear and easy-to-understand explanation of the grammar rule."
          },
          "examples": {
            "type": "array",
            "description": "A list of example sentences.",
            "items": {
              "type": "object",
              "properties": {
                "sentence": {
                  "type": "string",
                  "description": "The example sentence."
                },
                "type": {
                  "type": "string",
                  "enum": ["simple", "complex"],
                  "description": "The type of example."
                }
              },
              "required": ["sentence", "type"]
            }
          },
          "order": {
            "type": "number",
            "description": "The order of the grammar point in the curriculum."
          }
        },
        "required": ["id", "title", "explanation", "examples", "order"]
      }
    };
    const data = [
      {
        "id": "present-simple",
        "title": "Present Simple Tense",
        "explanation": "The present simple tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.",
        "examples": [
          {
            "sentence": "I work in London.",
            "type": "simple"
          },
          {
            "sentence": "The sun rises in the east.",
            "type": "complex"
          }
        ],
        "order": 1
      },
      {
        "id": "present-continuous",
        "title": "Present Continuous Tense",
        "explanation": "The present continuous tense is used for actions happening at the moment of speaking.",
        "examples": [
          {
            "sentence": "I am reading a book.",
            "type": "simple"
          },
          {
            "sentence": "She is studying to become a doctor.",
            "type": "complex"
          }
        ],
        "order": 2
      },
      {
        "id": "past-simple",
        "title": "Past Simple Tense",
        "explanation": "The past simple tense is used to talk about a completed action in a time before now.",
        "examples": [
          {
            "sentence": "I went to the cinema yesterday.",
            "type": "simple"
          },
          {
            "sentence": "He played football when he was a child.",
            "type": "complex"
          }
        ],
        "order": 3
      }
    ];
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
      console.error(validate.errors);
    }
    expect(validate.errors).toBeNull();
  });
});
