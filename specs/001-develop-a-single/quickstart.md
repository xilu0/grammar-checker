# Quickstart Guide

**Feature**: English Grammar Practice SPA

This guide provides instructions for manually testing the application to verify that the core user stories are met.

## Prerequisites
- The application is built and running locally.
- The `grammar.json` file is populated with at least 3 grammar points.

## Testing Scenarios

### Scenario 1: Start a Lesson
1. **Given** you are on the application's home screen.
2. **When** you click the "Start Lesson" button.
3. **Then** you should see the first grammar slide, displaying the title, explanation, and examples for the first grammar point.

### Scenario 2: Navigate to the Next Slide
1. **Given** you are viewing a grammar slide.
2. **When** you click the "Next" button.
3. **Then** you should see the next grammar slide with the corresponding content.

### Scenario 3: Navigate to the Previous Slide
1. **Given** you are viewing a grammar slide that is not the first one.
2. **When** you click the "Previous" button.
3. **Then** you should see the previous grammar slide with the corresponding content.

### Scenario 4: End of the Lesson
1. **Given** you are on the last grammar slide.
2. **When** you click the "Next" button.
3. **Then** you should see a summary screen indicating that the lesson is complete. [This is based on the clarification in the spec]
