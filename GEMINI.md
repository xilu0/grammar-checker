# Project Overview

This is an Angular-based single-page application (SPA) designed for practicing English grammar. The application presents grammar lessons as a series of slides. All grammar content is stored in a local JSON file (`src/assets/grammar.json`) and the application does not have a backend.

The application is built with Angular and uses vanilla HTML, CSS, and TypeScript.

# Building and Running

## Prerequisites

- Node.js and npm

## Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

1.  Run the application:
    ```bash
    ng serve
    ```
2.  Open your browser to `http://localhost:4200`.

## Building the Application

1.  Build the application for production:
    ```bash
    ng build
    ```

## Testing the Application

1.  Run the unit tests:
    ```bash
    ng test
    ```

# Development Conventions

## Code Style

-   The project uses Prettier for code formatting.
-   The coding style is enforced by ESLint.

## Testing

-   Unit tests are written with Jasmine and run with Karma.
-   Test files are located alongside the source files and have the `.spec.ts` extension.

## Data Model

The grammar data is stored in `src/assets/grammar.json`. The data is an array of JSON objects, where each object represents a grammar lesson and has the following structure:

```json
[
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
  }
]
```
