# Data Model

**Feature**: English Grammar Practice SPA
**Date**: 2025-09-14

This document defines the data structures for the application. The data is based on the entities identified in the feature specification.

## Entities

### GrammarPoint
Represents a single grammatical concept.

**Attributes**:
- `id` (string): A unique identifier for the grammar point (e.g., "present-simple").
- `title` (string): The name of the grammar point (e.g., "Present Simple Tense").
- `explanation` (string): A clear and easy-to-understand explanation of the grammar rule.
- `examples` (array of Example): A list of example sentences.
- `order` (number): A number that determines the order of the grammar point in the curriculum.

### Example
Represents an example sentence for a grammar point.

**Attributes**:
- `sentence` (string): The example sentence.
- `type` (string): The type of example, either "simple" or "complex".

## Relationships
- A `GrammarPoint` has a one-to-many relationship with `Example`.

## State Management
- The application state will consist of the array of `GrammarPoint` objects loaded from the JSON file and the index of the currently displayed slide.
